$(function () {

    //request our data files and reference with variables

    const stateGeoJson = d3.json('data/ky.geojson');
    const countyTopoJson = d3.json('data/chronic_cond.json');

    Promise.all([stateGeoJson, countyTopoJson]).then(getData);

    // when the browser resizes...

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

    function getData(data) {

        drawMap('Alc_Prev_2017', 'Alcohol Abuse', data)

        d3.select('#AB_PREV').on('click', () => {
            drawMap('Alc_Prev_2017', 'Alcohol Abuse', data)
        });

        d3.select("ALZ_PREV").on('click', () => {
            drawMap('AlzDem_Prev_2017', 'Alzheimer/Dementia', data)
        });

        d3.select('#ART_PREV').on('click', () => {
            drawMap('Arth_Prev_2017', 'Arthritis', data)
        });

        d3.select('#AST_PREV').on('click', () => {
            drawMap('Asth_Prev_2017', 'Asthma', data)
        });

        d3.select("AF_PREV").on('click', () => {
            drawMap('AF_Prev_2017', 'Atrial Fibrillation', data)
        });

        d3.select('#AUT_PREV').on('click', () => {
            drawMap('AutSpect_Prev_2017', 'Autism Spectrum', data)
        });

        d3.select("#CAN_PREV").on('click', () => {
            drawMap('Cancer_Prev_2017', 'Cancer', data)
        });

        d3.select("#COPD_PREV").on('click', () => {
            drawMap('COPD_Prev_2017', 'COPD', data)
        });

        d3.select("#DEPR_PREV").on('click', () => {
            drawMap('Deprs_Prev_2017', 'Depression', data)
        });

        d3.select('#DIA_PREV').on('click', () => {
            drawMap('Dia_Prev_2017', 'Diabetes', data)
        });

        d3.select("DRG_PREV").on('click', () => {
            drawMap('DrgAb_Prev_2017', 'Drug/Substance Abuse', data)
        });

        d3.select('#HIV_PREV').on('click', () => {
            drawMap('HIVAIDS_Prev_2017', 'HIV/AIDS', data)
        });

        d3.select('#HF_PREV').on('click', () => {
            drawMap('HF_Prev_2017', 'Heart Failure', data)
        });

        d3.select("#HEP_PREV").on('click', () => {
            drawMap('HepBC_Prev_2017', 'Hepatitis (B&C)', data)
        });

        d3.select('#HLIP_PREV').on('click', () => {
            drawMap('HpLip_Prev_2017', 'Hyperlipidemia', data)
        });

        d3.select("#HPTEN_PREV").on('click', () => {
            drawMap('HpTen_Prev_2017', 'Hypertension', data)
        });

        d3.select("#IHD_PREV").on('click', () => {
            drawMap('IHD_Prev_2017', 'Ischemic Heart Disease', data)
        });

        d3.select("#OSTEO_PREV").on('click', () => {
            drawMap('Osteo_Prev_2017', 'Osteoporosis', data)
        });

        d3.select("#SCHIZ_PREV").on('click', () => {
            drawMap('SchizPsych_Prev_2017', 'Schizophrenia/Psychotic', data)
        });

        d3.select("#STRK_PREV").on('click', () => {
            drawMap('Stroke_Prev_2017', 'Stroke', data)
        });

    }

    let mapContainer = d3.select('#ABMap')
    let svg = mapContainer

    function drawMap(healthVar, chronName, data) {

        svg.selectAll('*').remove() // remove all previous data

        // determine width and height of map from container
        const width = mapContainer.node().offsetWidth - 60;
        const height = mapContainer.node().offsetHeight - 60;

        // create and append a new SVG element to the map div
        svg = mapContainer
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .classed('position-absolute', true)
            .style('top', 30 + "px")
            .style('top', 30 + "px");

        $('#dropdownMenuButton').html(chronName);

        const stateData = data[0];
        const countiesData = data[1];

        const chron_2010 = `${healthVar.slice(0,-4)}2010`;
        const chron_2011 = `${healthVar.slice(0,-4)}2011`;
        const chron_2012 = `${healthVar.slice(0,-4)}2012`;
        const chron_2013 = `${healthVar.slice(0,-4)}2013`;
        const chron_2014 = `${healthVar.slice(0,-4)}2014`;
        const chron_2015 = `${healthVar.slice(0,-4)}2015`;
        const chron_2016 = `${healthVar.slice(0,-4)}2016`;
        const chron_2017 = `${healthVar.slice(0,-4)}2017`;
        const chron_KY_2017 = `${healthVar.slice(0,-4)}KY_2017`;
        const chron_US_2017 = `${healthVar.slice(0,-4)}US_2017`;

        console.log(countiesData);

        const countiesGeoJson = topojson.feature(countiesData, {
            type: 'GeometryCollection',
            geometries: countiesData.objects.chronic_cond.geometries
        });

        const projection = d3.geoAlbers()
            .rotate([87, 0])
            .center([30, 0])
            .fitsize([width / 1, height / 1.15], stateData)

        const path = d3.geoPath()
            .projection(projection);

        const tooltip = d3.select('.container-fluid').append('div')
            .attr('class', 'my-tooltip bg-secondary text-white py-1 px-2 rounded position-absolute invisible');

        mapContainer.on('mousemove', event => {
            tooltip.style('left', (d3.event.pageX + 10) + 'px')
                .style('top', (d3.event.pageY - 30) + 'px');
        });

        const myArray = countiesGeoJson.features.map(item => item.proprerties[healthVar])
            .filter(item => item.trim() !== "*")

        const title = chronName;
        const max = Math.max(...myArray)
        const min = Math.min(...myArray)

        const color = d3.scaleQuantize([min, max], d3.schemeBlues[9])
        const undefColor = "url(#diagonal-stripe-1)"

        svg.append("g")
            .attr("transform", `translate(50,${height/10})`)
            .append(() => legend({
                color,
                width: 320,
                title: `${title} Prevalence (%)`,
                tickSize: 1,
                tickFormat: ".1f"
            }));

        d3.select("#slider").on("input", function change() {
            let value = this.value;
            updateMap(value)
        })

        function updateMap(year) {
            let y = healthVar.slice(0, -4) + year
            svg.selectAll('*').remove()

            // To DO: Make loop through all years for each condition to get the min, max values
            // then build a legend that spans all years

            svg.append("g")
                .attr("transform", `translate(50,${height/10})`)
                .append(() => legend({
                    color,
                    width: 320,
                    title: `${title} Prevalence (%)`,
                    tickSize: 1,
                    tickFormat: ".1f"
                }));

            const counties = svg.append("g")
                .selectAll("path")
                .data(countiesGeoJson.features)
                .join("path")
                .attr("d", path)
                .attr("class", "county")
                .attr("fill", d => {

                    console.log(healthVar.slice(0, -4))
                    let value = d.properties[y];
                    if (value.trim() === "*") {
                        return undefColor;
                    } else {
                        return color(value);
                    }
                })

                .attr('class', 'county')

            d3.select('#yearTitle').text(year)

            counties.on('mouseover', (d, i, nodes) => {
                    d3.select(nodes[i]).classed('hover', true).raise();
                    tooltip.classed('invisible', false).html(`<h5>${d.properties.County} County</h5>Prevalence: ${d.properties[y]}%, ${year}`)

                    let chronInfo = $("#chron_name")
                    chronInfo.html(`${title}`);
                    chronInfo.show();

                    let countyLabel = $("#county_label");
                    countyLabel.html(`${d.properties.County}`);
                    countyLabel.show();

                    let prevInfo = $("#prev_info")
                    prevInfo.html(`${d.properties[y]}`);
                    prevInfo.show();

                    let kyAvgData = `${healthVar.slice(0,-4)}KY_${year}`
                    let kyAvg = $("#ky_avg");
                    kyAvg.html(`${d.properties[kyAvgData]}`);
                    kyAvg.show();

                    let kyLabel = $("#ky_label");
                    kyLabel.html(`Kentucky`);
                    kyLabel.show();

                    let usAvgData = `${healthVar.slice(0,-4)}US_${year}`
                    let usAvg = $("us_avg");
                    usAvg.html(`${d.properties[usAvgData]}`);
                    usAvg.show();

                    let usLabel = $("#us_label");
                    usLabel.html(`US`);
                    usLabel.show();
                })

                .on('mouseout', (d, i, nodes) => {
                    d3.select(nodes[i]).classed('hover', false)
                    tooltip.classed('invisible', true)

                    countyLabel = $("#county_label");
                    prevInfo = $("#prev_info");
                    kyAvg = $("#ky_avg");
                    kyLabel = $("#ky_label");
                    usAvg = $("#us_avg");
                    usLabel = $("#us_label");

                    countyLabel.hide();
                    prevInfo.hide();
                    kyAvg.hide();
                    kyLabel.hide();
                    usAvg.hide();
                    usLabel.hide();
                });

            svg.append('g')
                .selectAll('path')
                .data(stateData.features)
                .join('path')
                .attr('d', path)
                .classed('state', true);

        } // end of updateMap function

        //append 
        const counties = svg.append('g')
            .selectAll('path')
            .data(countiesGeoJson.features)
            .join('path')
            .attr('d', path)
            .attr('class', 'county')
            .attr('fill', d => {
                let value = d.properties[healthVar];
                if (value.trim() === "*") {
                    return undefColor;
                } else {
                    return color(value);
                }
            })
            .attr("class", "county")

        counties.on('mouseover', (d, i, nodes) => {
                d3.select(nodes[i]).classed('hover', true).raise();
                tooltip.classed('invisible', false).html(`<h5>${d.properties.County} County</h5>Prevalence: ${d.properties[healthVar]}%`)

                let chronInfo = $("#chron_name");
                chronInfo.html(`${title}`);
                chronInfo.show();

                let countyLabel = $("#county_label");
                countyLabel.html(`${d.properties.County}`);
                countyLabel.show();

                let prevInfo = $("#prev_info");
                prevInfo.html(`${d.properties[healthVar]}`);
                prevInfo.show();

                let kyAvg = $("#ky_avg");
                kyAvg.html(`$d.properties[chron_KY_2017]`);
                kyAvg.show();

                let kyLabel = $("#ky_label")
                kyLabel.html(`Kentucky`);
                kyLabel.show();

                let usAvg = $("#us_avg")
                usAvg.html(`${d.properties[chron_US_2017]}`);
                usAvg.show();

                let usLabel = $("#us_label")
                usLabel.html('US');
                usLabel.show();

            })

            .on('mouseout', (d, i, nodes) => {
                d3.select(nodes[i]).classed('hover', false)
                tooltip.classed('invisible', true)

                countyLabel = $("#county_label");
                prevInfo = $("#prev_info");
                kyAvg = $("#ky_avg")
                kyLabel = $("#ky_label")
                usAvg = $("#us_avg")
                usLabel = $("#us_label")

                countyLabel.hide();
                prevInfo.hide();
                kyAvg.hide;
                kyLabel.hide;
                usAvg.hide();
                usLabel.hide();
            });

            svg.append('g')
            .selectAll('path')
            .data(stateData.features)
            .join('path')
            .attr('d', path)
            .classed('state', true);

    }

});