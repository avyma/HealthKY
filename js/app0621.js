// JQuery to call object
//$();
//jQuery();
//$(document).ready();
// $(function () {} 

$(function () {

    const stateGeoJson = d3.json('data/ky.geojson');
    const chronTopoJson = d3.json('data/alcohol_abuse.json');

    Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, "alcohol_abuse", "Alcohol Abuse"));

    //console.log("State", stateGeoJson);
    //console.log("county", countyTopoJson);

    // select the HTML element that will hold our map
    const mapContainer = d3.select('#ABmap')

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


    d3.select("#AB_PREV").on('click', () => {

        const chronTitle = "Alcohol Abuse";
        const chronFile = "alcohol_abuse";

        const chronTopoJson = d3.json('data/alcohol_abuse.json');

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));

    });

    d3.select("#ALZ_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/alzheimer.json');

        const chronFile = "alzheimer";
        const chronTitle = "Alzheimer";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));
    });

    d3.select("#ART_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/arthritis.json');

        const chronFile = "arthritis";
        const chronTitle = "Arthritis";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));

    });

    d3.select("#AST_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/asthma.json');

        const chronFile = "asthma";
        const chronTitle = "Asthma";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));

    });

    d3.select("#AF_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/atrial_fibrillation.json');

        const chronFile = "atrial_fibrillation";
        const chronTitle = "Atrial Fibrillation";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));
    });

    d3.select("#AUT_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/autism.json');

        const chronFile = "autism";
        const chronTitle = "Autism";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));
    });

    d3.select("#CAN_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/cancer.json');

        const chronFile = "cancer";
        const chronTitle = "Cancer";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));
    });

    d3.select("#CHRONKID_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/chronic_kidney.json');

        const chronFile = "chronic_kidney";
        const chronTitle = "Chronic Kidney";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));
    });

    d3.select("#COPD_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/copd.json');

        const chronFile = "copd";
        const chronTitle = "COPD";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));
    });

    d3.select("#DEPR_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/depression.json');

        const chronFile = "depression";
        const chronTitle = "Depression";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));
    });

    d3.select("#DIA_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/diabetes.json');

        const chronFile = "diabetes";
        const chronTitle = "Diabetes";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));
    });

    d3.select("#DRG_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/drug_abuse.json');

        const chronFile = "drug_abuse";
        const chronTitle = "Drug/Substance Abuse";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));
    });

    d3.select("#HIV_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/hiv.json');

        const chronFile = "hiv";
        const chronTitle = "HIV/AIDS";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));

    });

    d3.select("#HF_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/heart_failure.json');

        const chronFile = "heart_failure";
        const chronTitle = "Heart Failure";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));
    });

    d3.select("#HEP_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/hepatitis.json');

        const chronFile = "hepatitis";
        const chronTitle = "Hepatitis";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));
    });

    d3.select("#HLIP_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/hyperlipidemia.json');

        const chronFile = "hyperlipidemia";
        const chronTitle = "Hyperlipidemia";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));
    });

    d3.select("#HTN_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/hypertension.json');

        const chronFile = "hypertension";
        const chronTitle = "Hypertension";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));

    });

    d3.select("#IHD_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/ihd.json');

        const chronFile = "ihd";
        const chronTitle = "Ischemic Heart Disease";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));

    });

    d3.select("#OSTEO_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/osteoporosis.json');

        const chronFile = "osteoporosis";
        const chronTitle = "Osteoporosis";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));

    });

    d3.select("#SCHIZ_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/schizophrenia.json');

        const chronFile = "schizophrenia";
        const chronTitle = "Schizophrenia";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));

    });

    d3.select("#STRK_PREV").on('click', () => {

        const chronTopoJson = d3.json('data/stroke.json');

        const chronFile = "stroke";
        const chronTitle = "Stroke";

        Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));

    });

    // function dataToSlider(stateGeoJson, chronTopoJson, chronFile, chronTitle) {
    //     d3.select("#slider").on('input', function () {
    // listen slider - get the year
    // const yearSlider = $(this).val();
    // Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle, yearSlider));
    //console.log(yearSlider);

    // });
    // }

    function drawMap(data, dataSource, chronTitle, defYear = "2017") {

        svg.selectAll('*').remove() // remove all previous data

        $('#dropdownMenuButton').html(chronTitle);

        // refer to different datasets
        const stateData = data[0];
        const chronData = data[1];

        //convert the TopoJSON into GeoJSON
        // Kentucky counties mapped
        const chronGeoJson = topojson.feature(chronData, {
            type: 'GeometryCollection',
            geometries: chronData.objects[dataSource].geometries
        });

        console.log("chronGeo", chronGeoJson);

        // declare a geographic path generator
        // fit the extent to the width and height using the geojson
        // .geoAlbers reference here: https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoAlbersUsa
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
            .attr('class', 'my-tooltip text-white py-1 px-2 rounded position-absolute invisible');

        // when mouse moves over the mapContainer
        // d3.event: https://github.com/d3/d3-selection/blob/v1.4.1/README.md#event
        // d3.event (also include d3.event.pageX, d3.event.pageY): https://github.com/d3/d3-selection/blob/v1.4.1/README.md#event

        mapContainer
            .on('mousemove', event => {
                //update the position of the tooltip
                tooltip.style('left', (d3.event.pageX + 10) + 'px')
                    .style('top', (d3.event.pageY - 30) + 'px');
            });

        // Use of map function, reference here: 
        // const myArray = chronGeoJson.features.map(item => item.properties[healthVar])
        //     .filter(item => item.trim() !== "*")

        const prevYear = "Prev_" + defYear;
        const expYear = "Exp_" + defYear;
        const myArray = chronGeoJson.features.map(item => item.properties[prevYear]).filter(item => item.trim() !== "*")


        const legendLabel = "Prev_Full";
        const chronName = chronGeoJson.features[0].properties[legendLabel];

        const title = chronGeoJson.features[0].properties[legendLabel];
        const max = Math.max(...myArray)
        const min = Math.min(...myArray)

        //console.log('max', max);

        const color = d3.scaleQuantize([min, max], d3.schemeBlues[9])
        const undefColor = "url(#diagonal-stripe-1)"

        svg.append("g")
            .attr("transform", "translate(500,600)")
            .append(() => legend({
                color,
                width: 320,
                title: `${title} Prevalence (%)`,
                tickSize: 1,
                tickFormat: ".1f"
            }));

        // append a new g element
        const chron_cond = svg.append('g')
            .selectAll('path')
            .data(chronGeoJson.features) // use the GeoJSON features
            .join('path') // join thm to path elements
            .attr('d', path) // use our path generator to project them on the screen
            .attr('class', 'county') // give each path element a class name of county
            .attr("fill", d => {
                let value = d.properties[prevYear];
                if (value.trim() === "*") {
                    return undefColor;
                } else {
                    return color(value);
                }
            })
            .attr('class', 'county') // give each path element a class name of county

        // applies event listeners to our polygons for user interaction
        chron_cond.on('mouseover', (d, i, nodes) => { // when mousing over an element
                d3.select(nodes[i]).classed('hover', true).raise(); // select it, add a class name, and bring to front
                tooltip.classed('invisible', false).html(`<h5><small>${d.properties.County} County</small></h5><h6 class="text-success"><small>${d.properties.Prev_Full} (${defYear})</small></h6><hr><p><h6><small>Prevalence: ${d.properties[prevYear]}%</small></h6><hr><h6><small>Kentucky Avg: ${d.properties["Prev_KY_" + defYear]}%</small></h6><p><small>US Avg: ${d.properties["Prev_US_" + defYear]}%</small></p>`) //make tooltip visible and update information
                //make tooltip visible and update information

                let chronInfo = $("#chron_name");
                chronInfo.html(`${title}`);
                chronInfo.show();

                let countyLabel = $("#county_label");
                countyLabel.html(`${d.properties.County}`);
                countyLabel.show();

                let countyLabelExp = $("#county_label_exp");
                countyLabelExp.html(`${d.properties.County}`);
                countyLabelExp.show();

                let prevInfo = $("#prev_info");
                prevInfo.html(`${d.properties[prevYear]}`);
                prevInfo.show();

                let expInfo = $("#exp_info");
                expInfo.html(`${(d.properties[expYear]).toLocaleString()}`);
                expInfo.show();

                let kyAvg = $("#ky_avg");
                kyAvg.html(`${d.properties["Prev_KY_" + defYear]}`);
                kyAvg.show();

                let kyAvgExp = $("#ky_exp_avg");
                kyAvgExp.html(`${d.properties["Exp_KY_" + defYear]}`);
                kyAvgExp.show();

                let kyLabel = $("#ky_label");
                kyLabel.html(`Kentucky`);
                kyLabel.show();

                let kyLabelExp = $("#ky_label_exp");
                kyLabelExp.html(`Kentucky`);
                kyLabelExp.show();

                let usAvg = $("#us_avg");
                usAvg.html(`${d.properties["Prev_US_" + defYear]}`);
                usAvg.show();

                let usAvgExp = $("#us_exp_avg");
                usAvgExp.html(`${d.properties["Exp_US_" + defYear]}`);
                usAvgExp.show();


                let usLabel = $("#us_label");
                usLabel.html(`US`);
                usLabel.show();

                let usLabelExp = $("#us_label_exp");
                usLabelExp.html(`US`);
                usLabelExp.show();

                // Social Vulnerability Index
                let sviHeader = $("#svi_header");
                sviHeader.html(`<span style="color:green">${d.properties.County}</span>`);
                sviHeader.show();

                let socioEco = $("#social");
                socioEco.html(`${d.properties.RPL_THEME1}`);
                socioEco.show();

                let houseDis = $("#household");
                houseDis.html(`${(d.properties.RPL_THEME2).toLocaleString()}`);
                houseDis.show();

                let minLang = $("#minority");
                minLang.html(`${(d.properties.RPL_THEME3).toLocaleString()}`);
                minLang.show();

                let housTrans = $("#housing");
                housTrans.html(`${(d.properties.RPL_THEME4).toLocaleString()}`);
                housTrans.show();

                let sumRank = $("#summary");
                sumRank.html(`${(d.properties.RPL_THEMES).toLocaleString()}`);
                sumRank.show();

            })

            .on('mouseout', (d, i, nodes) => { // when mousing out of an element
                d3.select(nodes[i]).classed('hover', false) //remove the class from the polygon
                tooltip.classed('invisible', true) // hide the element

                countyLabel = $("#county_label");
                countyLabelExp = $("#county_label_exp");
                prevInfo = $("#prev_info");
                expInfo = $("#exp_info");

                kyAvg = $("#ky_avg");
                kyAvgExp = $("#ky_exp_avg");
                kyLabel = $("#ky_label")
                kyLabelExp = $("#ky_label_exp")

                usAvg = $("#us_avg");
                usAvgExp = $("us_exp_avg")
                usAvgExp = $("#us_exp_avg");
                usLabel = $("#us_label")
                usLabelExp = $("#us_label_exp")

                sviHeader = $("#svi_header")
                sviHeader.hide();

                countyLabel.hide();
                countyLabelExp.hide();
                prevInfo.hide();
                expInfo.hide();

                kyAvg.hide();
                kyAvgExp.hide();
                kyLabel.hide();
                kyLabelExp.hide();

                usAvg.hide();
                usAvgExp.hide();
                usAvgExp.hide();
                usLabel.hide();
                usLabelExp.hide();

                socioEco = $("#social")
                socioEco.hide();

                houseDis = $("#household")
                houseDis.hide();

                minLang = $("#minority")
                minLang.hide();

                housTrans = $("#housing")
                housTrans.hide();

                sumRank = $("#summary")
                sumRank.hide();

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