var config = {
    style: 'mapbox://styles/mengchongng/ckopaiyvd6jrx18pfuqlcl4gj',
    accessToken: 'pk.eyJ1IjoibWVuZ2Nob25nbmciLCJhIjoiY2tqdmRqMDYwN2V6bzJxcDkxbnF2Z3AxdSJ9.WywwIjTr79o1p_94OwRv0w',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'Underwater',
            alignment: 'left',
            title: 'Tragedy of the Commons',
        
            description: '<p>Singapore is a low-lying tropical island between the Indian Ocean and South China Sea. Much of the land is <font style="color:tomato">less than 15m above sea level</font style>.<i> (Data: <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM/">MERIT DEM</a>)</i> </p>',
            image: 'resources/img/sea_level.png',
            description1:" <p>Around 30 per cent of Singapore including the central business district, airport, port and the industrial island is below 5m. Against the backdrop of rising temperature and sea levels, <font style='color:tomato'>this city state is sinking</font style> as she walks through the 'coal fire' of climate change.</p>",
            image1:'resources/img/fire_walk.png',
            image1Credit: 'Firewalking festival in Singapore',
            location: {
                center: [103.7, 1.4],
                zoom: 10.77,
                pitch: 58.5,
                bearing: 16.80
            },

            onChapterEnter: [
                {
                    layer: '3d_sg',
                    opacity: .75
                },
                {
                    layer: 'flat_sg',
                    opacity: 0
                },
                ,
                {
                    layer: 'rec_sg',
                    opacity: 0
                }

            ],
            onChapterExit: [
                {
                    layer: '3d_sg',
                    opacity: 0
                }
            ]
        },
        {
            id: 'flat_sg',
            alignment: 'right',
            title: 'All hands on deck',
            image: 'resources/img/barrage.jpg',
            description: "<p>With the real threat of sinking, climate action is Singapore's top priority. Singapore is builting up her coastal defence. About 70 per cent of Singapore's coastline is currently protected by walls and dams like the 9-Gate <i><a href='https://www.pub.gov.sg/marinabarrage'>Marina Barrage</a></i>.</p>",
            description1:"<p>Singapore is reaching out to her community to plant a million trees across city over the next 10 years in the <i><a href='https://www.nparks.gov.sg/treessg/one-million-trees-movement'>OneMillionTrees movement</a></i>.  In particular, she is also restoring her mangroves forests. The mangroves trees can not only help prevent coastline erosion but also create their own soil.</p>",
            image1:'resources/img/mangrove.jpg',
            description2:" <p>As part of <font style='color:tomato'>Smart Nation transformation</font style>, Singapore is harnessing the power of technology to green the urban city. For example,<i><a href='https://www.gardensbythebay.com.sg'>Gardens by the Bay</a></i> plans to transform Singapore to a 'City in a Garden'.",
            image2:'resources/img/gardens_bay.jpg',

            location: {
                center: [104, 1.362771],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'flat_sg',
                    opacity: 1
                },
                {
                    layer: '3d_sg',
                    opacity: 0
                }
                ,
                {
                    layer: 'rec_sg',
                    opacity: 0
                }
            ],
            onChapterExit: [

                {
                    layer: 'flat_sg',
                    opacity: 0
                }


            ]
        }    ,


        {
            id: 'rec_sg',
            alignment: 'left',
            title: 'Floating city',
            image: 'resources/img/float_marina.jpg',
            description: "<p>Since 1965, this <font style='color:tomato'>little red dot</font style> has expanded more than 20% by reclaiming land to create space. However, reclaiming land has its limits and climate issues.</p>",
            image1: 'resources/img/float_solar.jpg',
            description1: "Building on Singapore's expertise in the offshore oil/gas industry, Singapore has started to research and develop floating infrasture like the world's biggest floating stage <i><a href='https://en.wikipedia.org/wiki/The_Float_@_Marina_Bay'>(Float@Marina)</a></i> and one of the world's biggest <i><a href='https://www.sembcorp.com/en/media/media-releases/energy/2020/august/pub-and-sembcorp-commence-construction-of-60-mwp-floating-solar-photovoltaic-system-on-tengeh-reservoir/'>floating urban solar farm</a></i>.",
           

            location: {
                center: [103.7, 1.362771],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'rec_sg',
                    opacity: 1
                },
                {
                    layer: 'flat_sg',
                    opacity: 0
                }
            ],
            onChapterExit: []
        }    
        ,


        {
            id: 'thou_sg',
            alignment: 'left',
            title: 'How Much Land Does a Man Need? - Leo Tolstoy',          
            image: 'resources/img/singapores.png',
            description: "<p>In face of the pressing climate challenges, Singapore now has to find the answer to make <font style='color:tomato'>compact cities more liveable, greener and energy-efficient </font style> and/or how to house the world in <i><a href='https://sbr.com.sg/building-engineering/in-focus/singapore-unveils-compact-city-world-mode'>1000 Singapores</a><i>!<p>",



            location: {
                center: [103.7, 1.362771],
                zoom: 6.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'rec_sg',
                    opacity: 1
                },
                {
                    layer: 'flat_sg',
                    opacity: 0
                }
            ],
            onChapterExit: []
        }    

    
    
    
    ]
}

;
