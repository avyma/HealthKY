// JQuery to call object
//$();
//jQuery();
//$(document).ready();
// $(function () {} 

$(function () {

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

  // request our data files and reference with variables
  const stateGeoJson = d3.json('data/ky_state.geojson')
  countyTopoJson = d3.json('data/svi_hd_ky.json');

  //console.log("State",stateGeoJson);

  // wait until data is loaded then send to draw map function
  Promise.all([stateGeoJson, countyTopoJson]).then(drawMap);

  //console.log("State", stateGeoJson);
  //console.log("county", countyTopoJson);

  // accepts the data as a parameter countiesData (??? How did you derive at this -- countiesData ???)
  function drawMap(data) {

    //console.log(data);

    // refer to different datasets
    const stateData = data[0];
    const countiesData = data[1];

    //console.log(countiesData);

    //convert the TopoJSON into GeoJSON
    const countiesGeoJson = topojson.feature(countiesData, {
      type: 'GeometryCollection',
      geometries: countiesData.objects.SVI_HD_KY.geometries
    });

    // declare a geographic path generator
    // fit the extent to the width and height using the geojson
    // .geoAlbersUSA reference here: https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoAlbersUsa
    // for projections reference here: https://github.com/d3/d3/blob/master/API.md#projections
    const projection = d3.geoAlbers()

      //.fitSize([width / 1.25, height / 1.25], stateData) // update data to stateData
      .rotate([90, 0])
      .center([30, 0])
      //.translate([width / 1.25, height / 1.25])
      .fitSize([width / 1.25, height / 1.25], stateData) // update data to stateData



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
      .attr('class', 'my-tooltip bg-warning text-white py-1 px-2 rounded position-absolute invisible');

    // when mouse moves over the mapContainer
    // d3.event: https://github.com/d3/d3-selection/blob/v1.4.1/README.md#event
    // d3.event (also include d3.event.pageX, d3.event.pageY): https://github.com/d3/d3-selection/blob/v1.4.1/README.md#event
    mapContainer
      .on('mousemove', event => {
        //update the position of the tooltip
        tooltip.style('left', (d3.event.pageX + 10) + 'px')
          .style('top', (d3.event.pageY - 30) + 'px');
      });

    const color = d3.scaleQuantize([0, 10], d3.schemeBlues[9])


    svg.append("g")
      .attr("transform", "translate(610,20)")
      .append(() => legend({
        color,
        width: 260
      }));

    // append a new g element
    const counties = svg.append('g')
      .selectAll('path')
      .data(countiesGeoJson.features) // use the GeoJSON features
      .join('path') // join thm to path elements
      .attr('d', path) // use our path generator to project them on the screen
      .attr('class', 'county') // give each path element a class name of county
      .attr("fill", d => {
        return color(d.properties.AF_PREV);
      })
      .attr('class', 'county') // give each path element a class name of county

    console.log("countiesGeoJson", countiesGeoJson);

    // applies event listeners to our polygons for user interaction
    counties.on('mouseover', (d, i, nodes) => { // when mousing over an element
        d3.select(nodes[i]).classed('hover', true).raise(); // select it, add a class name, and bring to front
        tooltip.classed('invisible', false).html(`${d.properties.NAME} County`) //make tooltip visible and update information
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



  }


});