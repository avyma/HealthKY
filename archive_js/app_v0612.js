// JQuery to call object
//$();
//jQuery();
//$(document).ready();
// $(function () {} 

$(function () {

  // request our data files and reference with variables
  const stateGeoJson = d3.json('data/ky.geojson');
  const countyTopoJson = d3.json('data/chronic_cond.json');

  /* NOT WORKING PROPERLY
   // When the browser resizes...
   window.addEventListener('resize', () => {

    // remove existing SVG
    d3.selectAll("svg > *").remove();

    // use promise to call all data files, then send data to callback
    Promise.all([stateGeoJson, countyTopoJson])
      .then(getData)
      .catch(error => {
        console.log(error)
      });
  });

  */


  // wait until data is loaded then send to getData function
  Promise.all([stateGeoJson, countyTopoJson]).then(getData);


  //console.log("State", stateGeoJson);
  //console.log("county", countyTopoJson);

  // select the HTML element that will hold our map
  const mapContainer = d3.select('#AFmap')

  // determine width and height of map from container
  //Reference offsetWidth - 60 here: https://www.w3schools.com/jsref/prop_element_offsetwidth.asp
  // Reference .node() here: https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_node
  const width = mapContainer.node().offsetWidth - 60;
  const height = mapContainer.node().offsetHeight - 60;

  // create and append a new SVG element to the map div
  const svg = mapContainer
    .append('svg')
    .attr('width', width) // provide width and height attributes
    .attr('height', height)
    .classed('position-absolute', true) //add bootstrap class
    .style('top', 30 + "px") //40 pixels from the top
    .style('left', 30 + "px"); // 30 pixels from the left

  // request the JSON text file, then call drawMap function
  //d3.json("data/states.geojson").then(drawMap); - updated with new codes below for loading multiple files


  function getData(data) {

    //console.log("data", data);

    drawMap('AF_Prev_2017', 'Atrial Fibrillation', data)

    d3.select("#AF_PREV").on('click', () => {
      drawMap('AF_Prev_2017', 'Atrial Fibrillation', data)

    });

    d3.select("#HF_PREV").on('click', () => {
      drawMap('HF_Prev_2017', 'Heart Failure', data)
    });

    d3.select("#IHD_PREV").on('click', () => {
      drawMap('IHD_Prev_2017', 'Ischemic Heart Disease', data)
    });

    // drawMap('AF_Prev_2017', 'Atrial Fibrillation', data)

  }

  function drawMap(healthVar, chronName, data) {

    svg.selectAll('*').remove() // remove all previous data

    // refer to different datasets
    const stateData = data[0];
    const countiesData = data[1];

    //console.log(countiesData);

    //convert the TopoJSON into GeoJSON
    // Kentucky counties mapped
    const countiesGeoJson = topojson.feature(countiesData, {
      type: 'GeometryCollection',
      geometries: countiesData.objects.chronic_cond.geometries
    });

    // declare a geographic path generator
    // fit the extent to the width and height using the geojson
    // .geoAlbersUSA reference here: https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoAlbersUsa
    // for projections reference here: https://github.com/d3/d3/blob/master/API.md#projections
    const projection = d3.geoAlbers()


      .rotate([87, 0])
      .center([30, 0])
      //.translate([width / 1.25, height / 1.25])
      .fitSize([width / 1.15, height / 1.15], stateData) // update data to stateData


    // declared path generator using the projection
    // .geoPath Reference: https://github.com/d3/d3-geo#paths
    const path = d3.geoPath()
      .projection(projection);


    // create div for the tooltip and hide with opacity
    // Reference (Bootstrap) --------------------------------
    // container-fluid: https://getbootstrap.com/docs/4.5/layout/overview/#fluid
    // tooltip: https://getbootstrap.com/docs/4.5/components/tooltips/
    // Reference D3 -------------------------------------------
    // .attr here: https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_attr
    const tooltip = d3.select('.container-fluid').append('div')
      .attr('class', 'my-tooltip bg-secondary text-white py-1 px-2 rounded position-absolute invisible');

    // when mouse moves over the mapContainer
    // d3.event: https://github.com/d3/d3-selection/blob/v1.4.1/README.md#event
    // d3.event (also include d3.event.pageX, d3.event.pageY): https://github.com/d3/d3-selection/blob/v1.4.1/README.md#event
    mapContainer
      .on('mousemove', event => {
        //update the position of the tooltip
        tooltip.style('left', (d3.event.pageX + 10) + 'px')
          .style('top', (d3.event.pageY - 30) + 'px');
      });


    const myArray = []
    for (let x of countiesGeoJson.features) {
      myArray.push(+x.properties[healthVar])
    }

    const title = chronName;
    const max = Math.max(...myArray)
    const min = Math.min(...myArray)

    //console.log(myArray, min, max);
    const color = d3.scaleQuantize([min, max], d3.schemeBlues[9])

/*
    svg.append("g")
      .attr("transform", "translate(500,600)")
      .append(() => legend({
        color,
        width: 320,
        title: `${title} Prevalence (%)`,
        tickSize: 1,
        tickFormat: ".1f"
      }));
*/
    // append a new g element
    const counties = svg.append('g')
      .selectAll('path')
      .data(countiesGeoJson.features) // use the GeoJSON features
      .join('path') // join thm to path elements
      .attr('d', path) // use our path generator to project them on the screen
      .attr('class', 'county') // give each path element a class name of county
      .attr("fill", d => {
        return color(d.properties[healthVar]);
      })
      .attr('class', 'county') // give each path element a class name of county

    console.log("countiesGeoJson", countiesGeoJson);

    // applies event listeners to our polygons for user interaction
    counties.on('mouseover', (d, i, nodes) => { // when mousing over an element
        d3.select(nodes[i]).classed('hover', true).raise(); // select it, add a class name, and bring to front
        tooltip.classed('invisible', false).html(`<p>${d.properties.County} County</p>Prevalence: ${d.properties[healthVar]}%`) //make tooltip visible and update information
      })

      .on('mouseout', (d, i, nodes) => { // when mousing out of an element
        d3.select(nodes[i]).classed('hover', false) //remove the class from the polygon
        tooltip.classed('invisible', true) // hide the element
      });

    // append state to the SVG
    svg.append('g') // append a group element to the svg
      .selectAll('path') // select multiple paths (that don't exist yet)
      .data(stateData.features) // use the feature data from the geojson...update to stateData
      .join('path') // join the data to the now created path elements
      .attr('d', path) // provide the d attribute for the SVG paths

      .classed('state', true); // give each path element a class name of state

drawLegend(healthVar, chronName, countiesGeoJson, color, title, max, min);


  }

  function drawLegend(healthVar, chronName, color, title){

   

    svg.append("g")
      .attr("transform", "translate(500,600)")
      .append(() => legend({
        color,
        width: 320,
        title: `${title} Prevalence (%)`,
        tickSize: 1,
        tickFormat: ".1f"
      }));


  };
});