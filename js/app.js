// JQuery to call object
//$();
//jQuery();
//$(document).ready();
// $(function () {} 

$(function () {

    const stateGeoJson = d3.json('data/ky.geojson');
    const chronTopoJson = d3.json('data/alcohol_abuse.json');
    const chronTitle = "Alcohol Abuse"; //default position of dropdown - Alcohol Abuse (alphabetical order)
    const chronFile = "alcohol_abuse";

    Promise.all([stateGeoJson, chronTopoJson]).then(data => drawMap(data, chronFile, chronTitle));

    //console.log("State", stateGeoJson);
    //console.log("county", countyTopoJson);

    // select the HTML element that will hold our map
    const mapContainer = d3.select('#ABmap')

    // determine width and height of map from container
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

        const chronTopoJson = d3.json('data/athritis.json');

        const chronFile = "athritis";
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

        const chronFile = "IHD";
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

    function drawMap(data, dataSource, chronTitle) {

        const defYear = "2010"; //define default year - 2010

        svg.selectAll('*').remove() // remove all previous data

        $('#dropdownMenuButton').html(chronTitle);

        // refer to different datasets
        const stateData = data[0];
        const chronData = data[1];

        const chronGeoJson = topojson.feature(chronData, {
            type: 'GeometryCollection',
            geometries: chronData.objects[dataSource].geometries
        });

        //console.log("chronGeoJson", chronGeoJson);

        // ********* Constants (variables) relevant for defining choropleth & legend color characteristics ************
        const prevYear = "Prev_" + defYear; // name of chronic conditions (prevalence) - Naming convention: complete with year attached as suffix
        const expYear = "Exp_" + defYear; // name of chronic conditions (expenditure) - Naming convention: complete with year attached as suffix

        let maxNumArray = [];
        let minNumArray = [];
        let myArray = [];

        //loop through the years to derive at global min and max --- scale, color and legend
        for (year = 2010; year < 2018; year++) {
            let yearChronName = "Prev_" + year;
            myArray = chronGeoJson.features.map(item => item.properties[yearChronName]).filter(item => item.trim() !== "*");

            const max = Math.max(...myArray); //return max value localized each year (loop)
            //console.log("max of", year, "is", max);
            const min = Math.min(...myArray); // return min value of each year (loop)
            //console.log("min is", min)

            //maxNumArray = []; //assign empty array to store max values [2010 to 2017]
            maxNumArray.push(max); // max values of each year pushed to array max

            //minNumArray = []; //assign empty array to store min values [2010 to 2017]
            minNumArray.push(min); // min values of each year pushed to array min
        };

        const max = Math.max(...maxNumArray); // return max values of all years
        const min = Math.min(...minNumArray); // return min values of all years
        const color = d3.scaleQuantize([min, max], d3.schemeBlues[9]) // define scaleQuantize color schemes -- D3
        const undefColor = "url(#diagonal-stripe-1)" // define SVG diagonal stripe for non-numerical value "*"

        //*******************************************************

        const projection = d3.geoAlbers()
            .rotate([87, 0])
            .center([30, 0])
            //.translate([width / 1.25, height / 1.25])
            .fitSize([width / 1.15, height / 1.15], stateData) // update data to stateData

        const path = d3.geoPath()
            .projection(projection);

        drawLegend(chronGeoJson, color);

        d3.select("#slider").on("input", function change() {
            let defYear = this.value;

            let sliderYear = $("#yearTitle");
            sliderYear.html(`${defYear}`);
            sliderYear.show();

            updateMap(defYear);
        })

        function updateMap(defYear) {

            const prevYear = "Prev_" + defYear; // name of chronic conditions (prevalence) - Naming convention: complete with year attached as suffix
            const expYear = "Exp_" + defYear; // name of chronic conditions (expenditure) - Naming convention: complete with year attached as suffix

            svg.selectAll('*').remove()

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

            drawLegend(chronGeoJson, color);
            drawToolTip(chron_cond, prevYear, expYear, defYear);
        } // end of updateMap Function

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

        drawToolTip(chron_cond, prevYear, expYear, defYear);


        // *****************************  TOOLTIP and POP-UP BEGINS **************************************
        function drawToolTip(chron_cond, prevYear, expYear, defYear) {
            const tooltip = d3.select('.container-fluid').append('div')
                .attr('class', 'my-tooltip text-white py-1 px-2 rounded position-absolute invisible');

            mapContainer
                .on('mousemove', event => {
                    //update the position of the tooltip
                    tooltip.style('left', (d3.event.pageX + 10) + 'px')
                        .style('top', (d3.event.pageY - 30) + 'px');
                });

            // applies event listeners to our polygons for user interaction
            //make tooltip visible and update information
            chron_cond.on('mouseover', (d, i, nodes) => { // when mousing over an element
                    d3.select(nodes[i]).classed('hover', true).raise(); // select it, add a class name, and bring to front
                    tooltip.classed('invisible', false).html(`<h5><small>${d.properties.County} County</small></h5><h6 class="text-success"><small>${d.properties.Prev_Full} (${defYear})</small></h6><hr><p><h6><small>Prevalence: ${d.properties[prevYear]}%</small></h6><hr><h6><small>Kentucky Avg: ${d.properties["Prev_KY_" + defYear]}%</small></h6><p><small>US Avg: ${d.properties["Prev_US_" + defYear]}%</small></p>`) //make tooltip visible and update information

                    // build data array object for graph here
                    const countyKYChronData = [{
                            Year: '2010',
                            Prev: d.properties.Prev_2010
                        },
                        {
                            Year: '2011',
                            Prev: d.properties.Prev_2011
                        },
                        {
                            Year: '2012',
                            Prev: d.properties.Prev_2012
                        },
                        {
                            Year: '2013',
                            Prev: d.properties.Prev_2013
                        },
                        {
                            Year: '2014',
                            Prev: d.properties.Prev_2014
                        },
                        {
                            Year: '2015',
                            Prev: d.properties.Prev_2015
                        },
                        {
                            Year: '2016',
                            Prev: d.properties.Prev_2016
                        },
                        {
                            Year: '2017',
                            Prev: d.properties.Prev_2017
                        }
                    ];
                    // end of data array object for graph
                    //console.log("test", countyKYChronData);
                    drawGraph(countyKYChronData);

                    // mouseover panel - information
                    let chronInfo = $("#chron_name");
                    chronInfo.html(`${d.properties.Prev_Full} ${defYear}`);
                    chronInfo.show();

                    let sliderYear = $("#yearTitle");
                    sliderYear.html(`${defYear}`);
                    sliderYear.show();

                    let countyLabel = $("#county_label");
                    countyLabel.html(`${d.properties.County}`);
                    countyLabel.show();

                    let countyGraph = $("#county_graph");
                    countyGraph.html(`${d.properties.County}`);
                    countyGraph.show();

                    let countyLabelExp = $("#county_label_exp");
                    countyLabelExp.html(`${d.properties.County}`);
                    countyLabelExp.show();

                    let prevInfo = $("#prev_info");
                    prevInfo.html(`${d.properties[prevYear]}`);
                    prevInfo.show();

                    let expInfo = $("#exp_info");
                    expInfo.html(`${d.properties[expYear]}`);
                    expInfo.show();

                    let kyAvg = $("#ky_avg");
                    kyAvg.html(`${(d.properties["Prev_KY_" + defYear])}`);
                    kyAvg.show();

                    let kyAvgExp = $("#ky_exp_avg");
                    kyAvgExp.html(`${d.properties["Exp_KY_" + defYear].toLocaleString("en-US", {maximumFractionDigits:0})}`);
                    //console.log("test", typeof ["Exp_KY_" + defYear]);
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

                }) //end of mouseover

                .on('mouseout', (d, i, nodes) => { // when mousing out of an element
                    d3.select(nodes[i]).classed('hover', false) //remove the class from the polygon
                    tooltip.classed('invisible', true) // hide the element

                    countyLabel = $("#county_label");
                    countyLabel.hide();

                    countyLabelExp = $("#county_label_exp");
                    countyLabelExp.hide();

                    prevInfo = $("#prev_info");
                    prevInfo.hide();

                    expInfo = $("#exp_info");
                    expInfo.hide();

                    kyAvg = $("#ky_avg");
                    kyAvg.hide();

                    kyAvgExp = $("#ky_exp_avg");
                    kyAvgExp.hide();

                    kyLabel = $("#ky_label")
                    kyLabel.hide();

                    kyLabelExp = $("#ky_label_exp")
                    kyLabelExp.hide();

                    usAvg = $("#us_avg");
                    usAvg.hide();

                    usAvgExp = $("#us_exp_avg");
                    usAvgExp.hide();

                    usLabel = $("#us_label")
                    usLabel.hide();

                    usLabelExp = $("#us_label_exp")
                    usLabelExp.hide();

                    sviHeader = $("#svi_header")
                    sviHeader.hide();

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

                }); // end of mouseout

        } // end of drawToolTip

        // append state to the SVG
        svg.append('g') // append a group element to the svg
            .selectAll('path') // select multiple paths (that don't exist yet)
            .data(stateData.features) // use the feature data from the geojson...update to stateData
            .join('path') // join the data to the now created path elements
            .attr('d', path) // provide the d attribute for the SVG paths

            .classed('state', true); // give each path element a class name of state

    } // end of drawMap

    function drawLegend(chronGeoJson, color) {
        svg.append("g")
            .attr("transform", "translate(500,600)")
            .append(() => legend({
                color,
                width: 320,
                title: `${chronGeoJson.features[0].properties.Prev_Full} Prevalence (%)`,
                tickSize: 1,
                tickFormat: ".1f"
            }));
    };

    function drawGraph(countyKYChronData) {

        const svg = d3.select("#chron_graph");

        svg.selectAll("*").remove()

        const padding = {
            top: 20,
            right: 30,
            bottom: 30,
            left: 40
        };

        const chartArea = {
            "width": parseInt(svg.style("width")) - padding.left - padding.right,
            "height": parseInt(svg.style("height")) - padding.top - padding.bottom
        };

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(countyKYChronData, function (d, i) {
                return d.Prev
            })])
            .range([chartArea.height, 0]).nice();

        const xScale = d3.scaleBand()
            .domain(countyKYChronData.map(function (d) {
                return d.Year
            }))
            .range([0, chartArea.width])
            .padding(.4);

        // xAsix
        const xAxis = svg.append("g")
            .classed("xAxis", true)
            .attr(
                'transform', 'translate(' + padding.left + ',' + (chartArea.height + padding.top) + ')'
            )
            .call(d3.axisBottom(xScale));

        // yAxis
        const yAxisFn = d3.axisLeft(yScale);
        const yAxis = svg.append("g")
            .classed("yAxis", true)
            .attr(
                'transform', 'translate(' + padding.left + ',' + padding.top + ')'
            );
        yAxisFn(yAxis);


        // bars
        const rectGrp = svg.append("g").attr(
            'transform', 'translate(' + padding.left + ',' + padding.top + ')'
        );

        rectGrp.selectAll("rect").data(countyKYChronData).enter()
            .append("rect")
            .attr("width", xScale.bandwidth())
            .attr("height", function (d, i) {
                return chartArea.height - yScale(d.Prev);
            })
            .attr("x", function (d, i) {
                return xScale(d.Year);
            })
            .attr("y", function (d, i) {
                return yScale(d.Prev);
            })
            .attr("fill", "#3d6ed6");

    };

});