/* ============================== DATA ==============================
   All text lives in T, all places in PINS (each pin has radar{band,pols,text} and future).
   To translate later (e.g. Arabic): translate the strings here and set <html lang dir>.
   IMAGES: real NISAR radar images (embedded). ph() is only used for the fallback image. */
const ph=(a,b,txt)=>'data:image/svg+xml;utf8,'+encodeURIComponent(
 `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="800" height="500" fill="url(#g)"/><text x="400" y="260" fill="#fff" fill-opacity=".75" font-family="sans-serif" font-size="32" text-anchor="middle">${txt}</text></svg>`);
const FALLBACK=ph('#222','#444','Image not available');
const T={
 sub:'Explore the subtle shifts beneath our feet, seen through the eyes of NISAR.',
 noPlaces:'No places yet. NISAR scenes for this force will be added.',
 hint:'Pick a surface-change factor, then explore its highlighted locations on the globe.',
 foot:'All images are real NISAR radar data. Places tagged Documented case are NASA findings without an image here. NISAR launched in 2025, so each place has two dates for now, and longer time series will come as the mission keeps observing.',
 explainTitle:'What happened, and how does radar see it?',
 compare:'Before and after (drag the slider)',timeline:'Change over time',
 annTitle:'Our own annotations (labels in Arabic). They mark areas that look different and are not confirmed changes.',
 radarTitle:'Radar settings that reveal it',
 radarView:'Radar view',
 polHelp:'What do HH, HV and VV mean?',
 polHelpText:'The two letters are the direction the radar wave vibrates when it is sent and when it comes back (H = horizontal, V = vertical). HH and VV, called co-polarized, react strongly to smooth surfaces, water and corners. HV, called cross-polarized, reacts to rough, tangled things like leaves and branches.',
 futureTitle:'What NISAR will make possible',
 reportRadar:'Radar view',
 endFuture:"NISAR will image all of Earth's land and ice about every 12 days, with free and open data. That means faster disaster maps, better crop and forest monitoring, and long records of moving ground and ice.",
 legend:[['loss','Loss or damage','--loss'],['grow','Growth or recovery','--grow'],['water','Water','--water'],['fire','Fire or heat','--fire']],
 report:'Create report',reportWhat:'What happened',reportWhy:'Why it matters',source:'Source: NISAR radar',
 progress:(n,t)=>`${n} / ${t} explored`,
 scoreTxt:'You explored every place on the globe.',
 layerDesc:{
  Optical:'What a regular camera satellite would show.',
  Radar:'Radar sends its own signal, so it sees through clouds, smoke and darkness.',
  'Change map':'Areas where the radar signal changed between the two dates.'}
};
const TONE={loss:'#ff5a5f',grow:'#4cd68a',water:'#4ba3ff',fire:'#ff9a3c'};

const DE={main:'assets/de-main.jpg'};
const KM={before:'assets/km-before.jpg',after:'assets/km-after.jpg',ann:'assets/km-ann.jpg'};
const VE={before:'assets/ve-before.jpg',after:'assets/ve-after.jpg',ann:'assets/ve-ann.jpg'};
const MZ={before:'assets/mz-before.jpg',after:'assets/mz-after.jpg',ann:'assets/mz-ann.jpg'};
const MZCH='assets/mzch-img.jpg';
const PINS=[
{id:"kamchatka",title:"Volcanoes in Kamchatka, Russia",type:"Volcanic activity",lat:54.6,lng:160.3,color:TONE.fire,real:true,aspect:'900/913',
 beforeImage:KM.before,afterImage:KM.after,annotated:KM.ann,
 beforeDate:"Jun 18, 2026",afterDate:"Jun 30, 2026",
 whatHappened:"This radar view shows the Kronotsky Peninsula area on the Pacific coast of Kamchatka, with Lake Kronotskoye and a group of volcanoes. After a magnitude 8.8 earthquake on July 30, 2025, Krasheninnikov volcano erupted for the first time in nearly five centuries. NASA's JPL says NISAR has watched it since December 25, 2025: lava filled a small inner caldera, overflowed into a wider crater and spread east into a fan. These two radar images are from June 2026.",
 howNisarSaw:"This is a false-color radar image, so color shows how the surface scatters radar. At this wide view the two dates look broadly similar: ridges and valleys line up, the coast has not moved, and no new lava-flow outline stands out. That is normal, because a lava field is small compared with the whole scene. Scientists zoom in and use many passes to see it. A brightness change alone is not proof of an eruption. Radar also works through ash, cloud and darkness.",
 whyItMatters:"Kamchatka volcanoes are remote and often hidden by cloud and ash. Repeated radar images let scientists watch lava flows and summit changes safely, and warn flights and nearby communities.",
 timeline:[
   {label:"Earthquake",date:"Jul 30, 2025",imageOrNote:"A magnitude 8.8 earthquake strikes off Kamchatka. No NISAR image from this day is shown.",changePercent:null,badge:"Quake",tone:'fire',fade:0},
   {label:"Krasheninnikov erupts",date:"Aug 3, 2025",imageOrNote:"First eruption in nearly five centuries. Ash and lava begin.",changePercent:null,badge:"Eruption",tone:'loss',fade:0},
   {label:"Earlier radar image",date:"Jun 18, 2026",imageOrNote:"The volcanoes and coast as NISAR saw them before.",changePercent:null,badge:"Before",tone:'grow',fade:0},
   {label:"Later radar image",date:"Jun 30, 2026",imageOrNote:"Lava is still active at Krasheninnikov (NASA JPL). At this scale, no obvious new lava outline.",changePercent:null,badge:"After",tone:'fire',fade:1}],
 timelineNote:"Event dates are real. The two radar images are from June 18 and June 30, 2026. No percentage is shown because we have not measured the change ourselves.",
 layers:[{name:'Radar',image:KM.after,description:"NISAR radar of June 30, 2026. Drag the slider to compare it with June 18."}],
 radar:{band:"L-band",pols:["HH"],text:"NASA's NISAR time-lapse of Krasheninnikov was made from HH data (L-band, 17 dates from Dec 25, 2025 to Aug 17, 2026). Lava looks lighter than the snow and bare ground around it because it reflects microwaves more strongly. The purple and green composite shown here is a preview image, and the source does not say how its colors map to polarizations, so we only label HH for the NASA time-lapse (NASA SVS 5675). L-band also sees through ash and cloud."},
 future:"NISAR passes over Kamchatka about every 12 days, which could let scientists track lava flows and summit changes through each eruption.",
 credit:"Image source: NISAR radar, June 18 and June 30, 2026. Eruption details: NASA JPL (NISAR time-lapse). Location identified from the shapes of the coast, lake and volcanoes. Pin location is approximate."},
{id:'alaska',title:'Earthquake in Alaska',type:'Earthquake and avalanches',lat:60.3,lng:-139.8,color:TONE.loss,real:true,
 beforeImage:AK.before,afterImage:AK.after,
 beforeDate:'Nov 26, 2025',afterDate:'Dec 8, 2025',
 whatHappened:'On December 6, 2025, a magnitude 7.0 earthquake shook the St. Elias Mountains on the Yukon-Alaska border. The shaking set off hundreds of landslides and snow avalanches (the USGS mapped more than 700), including on slopes near Mount King George and Mount Logan.',
 howNisarSaw:'Rougher surfaces send more radar energy back and look bright, with the roughest areas in dark green. Smooth surfaces look dark, shown in purple. In the December 8 image, debris from landslides and avalanches makes flat parts of the glacier look rougher. Radar also works through winter darkness and cloud.',
 whyItMatters:'Remote mountains in winter are hard to survey from the ground or with normal cameras. Radar shows where debris landed, so scientists can map the damage.',
 timeline:[
  {label:'Before the quake',date:'Nov 26, 2025',imageOrNote:'The glacier surface is mostly smooth.',changePercent:null,badge:'Before',tone:'grow',fade:0},
  {label:'M7.0 earthquake',date:'Dec 6, 2025',imageOrNote:'Shaking triggers landslides and avalanches. No NISAR image from this day is shown.',changePercent:null,badge:'Quake',tone:'fire',fade:0},
  {label:'Debris on the glacier',date:'Dec 8, 2025',imageOrNote:'Rough debris spreads over flatter parts of the glacier.',changePercent:null,badge:'After',tone:'loss',fade:1}],
 timelineNote:'Dates are real. No percentage is shown because we have not measured the change ourselves.',
 layers:[{name:'Radar',image:AK.after,description:'NISAR radar after the earthquake. Drag the slider to compare it with the image from before.'}],
 radar:{band:'NISAR radar',pols:[],text:'This is a false-color radar image: color shows how rough the ground is. NASA used radar here partly because ice at least 700 meters thick covers the ground, which made ground-movement maps (interferograms) impossible for this event. NASA\'s article names the NISAR GSLC product but not the polarizations behind the colors, so we do not label them.'},
 future:'Regular NISAR passes could give before-and-after pairs like this for remote mountain regions soon after a quake, to help map landslide hazards.',
 credit:'Credit: Eric Fielding and Gustavo H. X. Shiroma (JPL), NISAR Algorithm Development Team, via NASA Earth Observatory / Lauren Dauphin. NISAR GSLC data. Pin location is approximate.'},
{id:"venezuela",title:"Earthquakes in Venezuela",type:"Earthquake",lat:10.4,lng:-68.0,color:TONE.loss,real:true,aspect:'900/886',
 beforeImage:VE.before,afterImage:VE.after,annotated:VE.ann,
 beforeDate:"Jun 13 and 18, 2026",afterDate:"Jun 25 and 30, 2026",
 whatHappened:"On June 24, 2026, two powerful earthquakes (magnitudes 7.2 and 7.5, less than a minute apart) struck northern Venezuela, near Yumare in Yaracuy state. More than 5,000 people were killed, according to official figures reported in July 2026. This radar scene shows part of the northern coast and an inland lake.",
 howNisarSaw:"In plain radar brightness, the two dates look very similar. The sea looks different, most likely because of wind and waves, and a brightness change alone does not prove damage. The earthquake shows up in the phase of the radar signal instead. NASA compared NISAR passes from June 13 and 18 with June 25 and 30 and found that the ground moved up to about 60 centimeters, mostly sideways. This method is called InSAR, and it can measure movement far smaller than one pixel.",
 whyItMatters:"After a big earthquake, roads and mobile networks may be down. Radar images from space show where the land changed, so teams can decide where to look first.",
 timeline:[
   {label:"Before the quakes",date:"Jun 13 and 18, 2026",imageOrNote:"Radar scenes of the coast and lake before the earthquakes.",changePercent:null,badge:"Before",tone:'grow',fade:0},
   {label:"Twin earthquakes",date:"Jun 24, 2026",imageOrNote:"Magnitudes 7.2 and 7.5, less than a minute apart (USGS). No NISAR image from this day is shown.",changePercent:null,badge:"Quake",tone:'fire',fade:0},
   {label:"After the quakes",date:"Jun 25 and 30, 2026",imageOrNote:"The pictures look alike, but the radar phase shows the ground moved up to about 60 cm (NASA).",changePercent:null,badge:"After",tone:'loss',fade:1}],
 timelineNote:"Dates are real. No percentage is shown because we have not measured the change ourselves.",
 layers:[{name:'Radar',image:VE.after,description:"NISAR radar after the earthquakes. Drag the slider to compare it with the image from before."}],
 radar:{"band": "L-band", "pols": [], "text": "This is a false-color composite (purple, green and white), and the polarizations behind the colors are not confirmed, so we do not label them. Calm water looks dark and rough land looks brighter, so changes near the coast stand out. A brightness change alone is not proof of damage. Scientists confirm it with more analysis."},
 future:"With regular NISAR passes, scientists could map ground movement within days of a quake, to see which faults moved and where damage is most likely.",
 credit:"Image source: NISAR radar previews, June 2026. Ground movement: NASA Earth Observatory (map by Lauren Dauphin, data by Eric Fielding and the NISAR science team at JPL). Earthquake facts: USGS, Al Jazeera, Eos. Dates are the ones NASA used for its ground-movement map. Location identified from the coast and the lake. Pin location is approximate."},
{id:"mozambique",title:"Flood in Ch\u00f3kw\u00e8, Mozambique",type:"Flood",lat:-24.5,lng:33.0,color:TONE.water,real:true,aspect:'1/1',
 beforeImage:MZ.before,afterImage:MZ.after,annotated:MZ.ann,
 beforeDate:"Jan 5, 2026",afterDate:"Jan 17, 2026",
 whatHappened:"In January 2026, weeks of intense rain overwhelmed rivers and reservoirs in southern Mozambique. The Limpopo and Incomati rivers flooded large areas around Chókwè and other towns, cut roads and forced evacuations. At least 600,000 people were affected, according to Mozambique's disaster agency as cited by NASA, and about 400,000 acres of cropland were damaged (NASA).",
 howNisarSaw:"Calm open water reflects radar away from the satellite, so it looks dark. On January 5 the Limpopo is a thin dark line. By January 17 a wide dark band spreads across the floodplain around it. Comparing the two dates, we marked about 199 km² of new open water. NASA used the same two dates for its flood map because optical satellites were blocked by clouds, while radar passed through. Where water stands among crops or trees, HH often gets brighter instead (double bounce), and our simple water map does not capture that.",
 whyItMatters:"Flood maps made through cloud cover show where roads are cut and which fields are under water, so help can be sent to the right places.",
 timeline:[
   {label:"Weeks of heavy rain",date:"Dec 2025 - Jan 2026",imageOrNote:"Intense rain overwhelms rivers and reservoirs (NASA Earth Observatory).",changePercent:null,badge:"Rain",tone:'water',fade:0},
   {label:"Before",date:"Jan 5, 2026",imageOrNote:"NISAR HH radar before the flood. The river is a thin dark line.",changePercent:null,badge:"Before",tone:'grow',fade:0},
   {label:"Active flood",date:"Jan 17, 2026",imageOrNote:"Dark areas around the river are standing water (about 199 km² of new open water in our map).",changePercent:null,badge:"After",tone:'water',fade:1}],
 timelineNote:"Dates are real. Our own estimate: about 199 km² of new open water (about 8% of a 50 × 50 km scene). Open water only, so the true flooded area is probably larger.",
 layers:[{name:'Radar',image:MZ.after,description:"NISAR radar during the flood. Drag the slider to compare it with the image from before."},{name:'Our flood map',image:MZCH,description:"Our own analysis of the two HH images. Blue = new open water on Jan 17 (darker than −18 dB and at least 3 dB darker than on Jan 5). It does not include flooded vegetation, so it is a minimum estimate."}],
 radar:{band:"L-band",pols:["HH"],text:"These images are HH backscatter from NISAR's L-band radar (Level-2 GCOV product, 10 m pixels), drawn as grey levels in decibels: dark = smooth surface such as calm water, bright = rough surface or buildings. Both dates come from the same orbit track (114) and frame (165), so they line up pixel for pixel. HV was in the files too but is not used in this map."},
 future:"With a new image about every 12 days, NISAR could help flood teams map water extent within days and see how fast it drains.",
 credit:"Image source: NISAR L-band radar, L2 GCOV products from the Alaska Satellite Facility (ASF) Vertex, Jan 5 and Jan 17, 2026 (track 114, frame 165). Flood map: our own analysis (HH, thresholds −18 dB and −3 dB). Flood context: NASA Scientific Visualization Studio (SVS 5661) and NASA Earth Observatory. Pin location is approximate."},
{id:'delta',title:'The Nile Delta, Egypt',type:'Farmland and cities',lat:30.8,lng:31.0,color:TONE.grow,real:true,single:true,aspect:'1300/1231',
 beforeImage:DE.main,afterImage:DE.main,
 beforeDate:'2026 (exact date to be added)',afterDate:'',
 whatHappened:'The Nile Delta is where the river meets the Mediterranean, a densely farmed and densely populated region. Alexandria sits on the coast in the west and Cairo at the southern tip of the delta. This radar view looks down on all of it, day or night, in any weather. Possible drivers of change to test: crop seasons, new farmland in the desert, and cities spreading over fields.',
 howNisarSaw:'Smooth water looks dark, so the coastal lakes and river branches stand out. Cities look very bright because buildings reflect radar strongly. In the desert west of the delta, many round patches look purple. They are most likely center-pivot irrigated fields on reclaimed land, which we still need to confirm with a second date and optical images.',
 whyItMatters:'Millions of people live and farm in the delta. Radar lets planners watch farmland, cities and coastal lakes change through the seasons and across the years.',
 timeline:[],
 timelineNote:'This place has one radar image for now. A second date from the same satellite track will let us show change.',
 layers:[{name:'Radar',image:DE.main,description:'NISAR L-band radar over the Nile Delta. Water is dark and cities are bright.'}],
 radar:{band:'L-band',pols:[],text:'L-band radar sees through clouds and reaches below leaves. We have not confirmed which polarizations make up the colors in this preview, so we do not label them.'},
 future:'With a new image about every 12 days, NISAR can follow crop seasons, new farmland and city growth across the whole delta.',
 credit:'Image source: NISAR radar preview from the Alaska Satellite Facility (ASF) Vertex. Exact scene and date to be added. Location identified from the coastline, lakes and cities.'}
];

const EXTRA={"kamchatka": {"obs": ["Dec 25, 2025", "Jan 1, 2026", "Jan 13", "Jan 25", "Feb 18", "Mar 14", "Mar 26", "Apr 7", "Apr 19", "May 13", "May 25", "Jun 6", "Jun 18", "Jun 30", "Jul 12", "Jul 24", "Aug 17, 2026"], "obsNote": "The 17 NISAR HH dates NASA used for its Krasheninnikov time-lapse (NASA SVS 5675). Our slider shows only June 18 and June 30.", "sci": {"drivers": "Magma rose into Krasheninnikov after the 2025 earthquake. Fresh lava forms a rough, blocky surface that sends much more radar energy back than the smooth snow or bare ground around it, so lava looks bright. Lava, snow, ash and cloud all change what the radar sees, but L-band passes through ash and cloud.", "pol": "HH is the polarization of NASA's time-lapse. Rough lava and its blocky edges return strong co-polarized (HH) energy. Adding HV would show how rough or volume-like the deposit is, but our sources do not show an HV version.", "unseen": "In our two wide images no lava outline stands out. A lava field is tiny compared with the scene, so you need zoom and many dates. We do not claim a change we did not measure."}, "human": "No farmland here, but eruptions threaten flights and nearby communities, and ash grounds aircraft. Repeat radar passes can warn them even in cloud."}, "alaska": {"sci": {"drivers": "A M7.0 quake shook steep, glacier-covered slopes. Shaking released landslides and snow avalanches (USGS mapped more than 700). Their debris is rough and blocky, so it scatters more radar energy back than the smooth glacier surface.", "pol": "NASA's article names the NISAR GSLC product but not the polarizations, so we cannot say which one is shown. In general, rough debris raises backscatter in co-polarized and cross-polarized channels alike.", "unseen": "Ground movement (InSAR) could not be mapped here because ice at least 700 m thick keeps changing between passes. Roughness change was the usable signal."}, "human": "A remote, thinly populated range, but landslide maps still matter for glaciers, rivers and anyone working or climbing in these mountains."}, "venezuela": {"sci": {"drivers": "Two big quakes slid blocks of crust sideways along a fault. NASA's map shows the ground moved up to about 60 cm: red areas moved east and up, blue areas west and down, white areas barely moved.", "pol": "The ground-movement map uses the phase of the radar wave from two passes (InSAR). NASA's page does not state which polarization was used. Brightness alone barely changed, which is exactly why phase matters.", "unseen": "Plain radar brightness looks almost the same before and after, so brightness would have hidden the earthquake. Wind and waves make the sea look different without any damage."}, "human": "A densely settled coast. Where the ground moved most is where roads, pipes and buildings are most likely damaged, so the displacement map helps decide where to look first."}, "mozambique": {"sci": {"drivers": "Weeks of heavy rain filled the Limpopo and Incomati rivers and reservoirs. Water spilled across a flat floodplain. Calm open water acts like a mirror and sends radar away from the satellite, so it looks dark. Where water stands among crops or trees, the signal bounces from water to stems and back (double bounce), which makes HH brighter.", "pol": "HH shows flooded vegetation (double bounce) as bright and calm open water as dark. Our map uses HH only. HV mostly responds to leaves and branches, so a drop in HV over fields would mean the canopy is covered or flattened.", "unseen": "Brightness alone cannot separate flood from wet soil or wind-roughened water. Scientists confirm with the ratio, with more dates and with field reports."}, "analysis": {"title": "Our own analysis (Mozambique, Jan 5 vs Jan 17)", "body": "We used NISAR L2 GCOV HH backscatter (10 m pixels) from the Alaska Satellite Facility for January 5 and January 17, 2026. Both come from track 114 and frame 165, so no alignment was needed. We converted the values to decibels and smoothed them with a 3 × 3 median filter. A pixel counts as new flood water if it is darker than −18 dB on January 17 and at least 3 dB darker than on January 5. Patches smaller than 1 hectare were removed. About 199 km² of the 50 × 50 km scene (about 8%) was flagged. Another 52 km² was already dark on both dates (the river, lakes and other smooth surfaces).", "limits": "Limits: this finds open water only. Flooded vegetation, where HH often gets brighter, is not counted, so the real flooded area is probably larger. The thresholds were chosen by eye, not tuned against field data or a reference flood map. Smooth wet fields can look like water, and we did not check against optical images. Treat the number as an estimate."}, "human": "About 400,000 acres of cropland were damaged and at least 600,000 people were affected (NASA, citing Mozambique's disaster agency). Floodplain farming puts crops exactly where the river spreads."}, "delta": {"sci": {"drivers": "Three forces shape the Delta. Cities spread over fields. New irrigated farms spread into the desert. And the land sinks while the sea rises, which brings salt into the soil. Radar sees each differently: buildings are bright because walls and streets reflect radar back, crops change with the season and their moisture, and water and wet salty soil look dark.", "pol": "In general, HV follows how much leaf and branch volume there is, so it is the best channel for crop growth, while HH and VV react strongly to buildings and water. This preview does not say which polarizations make up its colors, so we do not label them.", "unseen": "With one date we cannot show change. A second date from the same track would let us separate crop seasons from real land-cover change."}, "human": "Farming and cities compete for the same fertile land: around Alexandria, farmland fell 11% from 1987 to 2019 while urban area grew 11% (NASA Earth Observatory). Meanwhile the New Delta project aims to bring 2.2 million feddans of desert west of the Delta into farming.", "facts": [["Land suitable for farming in Egypt", "about 4%"], ["Egypt's population", "about 45 million in the 1980s, now over 100 million"], ["Arable land lost", "about 2% per decade, and speeding up"], ["Alexandria area, 1987 to 2019", "farmland down 11%, urban area up 11%"], ["Farmland damaged by sea-level rise and salt", "about 15% of the most fertile land (UN FAO)"], ["New Delta project", "2.2 million feddans (about 9,240 km²) west of the Delta"]], "factsSrc": "NASA Earth Observatory: The Nile Delta's Disappearing Farmland; A New Delta in the Desert."}};
PINS.forEach(p=>Object.assign(p,EXTRA[p.id]||{}));
/* Documented NISAR cases WITHOUT an image in this app (docOnly). Facts come from the linked NASA/JPL pages;
   hypotheses are labelled as general radar principles. Add images later by giving beforeImage/afterImage and removing docOnly. */
PINS.push(
{id:'mexico',title:'Mexico City is sinking',type:'Land subsidence',lat:19.43,lng:-99.13,color:TONE.loss,real:true,docOnly:true,
 whatHappened:'NASA and JPL mapped ground sinking across Mexico City and its surroundings, home to about 20 million people, using NISAR measurements from October 25, 2025 to January 17, 2026 (the dry season). Dark blue areas sank by more than 2 cm per month, and parts of the city sank up to a few centimeters per month. For comparison, parts of the metro area sank about 35 cm per year in the 1990s and 2000s.',
 howNisarSaw:'NISAR L-band radar compares the phase of the echo between passes (InSAR). A change in distance of a few millimeters between the ground and the satellite shows up as a change in phase, so the map shows slow ground motion that no brightness image could show. JPL\'s article does not state the polarization.',
 whyItMatters:'Uneven sinking cracks pipes, roads and buildings. A regular map of ground motion shows which neighborhoods are sinking fastest.',
 timeline:[],layers:[],
 radar:{band:'L-band',pols:[],text:'Ground motion from radar phase (InSAR) over about 12 weeks. The polarization and the exact InSAR method are not stated by the source, so we do not label them.'},
 sci:{drivers:'Heavy groundwater pumping and the weight of the city are compacting the soft ancient lakebed (NASA/JPL). When water leaves the clay, the layer shrinks and the surface drops.',pol:'Not stated by the source. In general, InSAR needs the surface to look the same between passes, and L-band keeps that coherence better over vegetation than shorter wavelengths.',unseen:'This app has no image of this map, so we show no figure and no measurement of our own. The numbers above are NASA\'s.'},
 human:'About 20 million people live in the area. The Angel of Independence (built 1910, 36 m tall) has had 14 steps added to its base as the ground around it sank.',
 future:'With a new pass about every 12 days, NISAR could track sinking neighborhood by neighborhood and show whether pumping limits slow it. The same method applies to coastal cities, including the Nile Delta.',
 link:'https://www.jpl.nasa.gov/news/us-indian-space-mission-maps-extreme-subsidence-in-mexico-city/',
 credit:'Source: NASA/JPL, April 29, 2026. Image credit in the source: NASA/JPL-Caltech/David Bekaert. No image is shown here.'},
{id:'antarctica',title:'Crevasses around an Antarctic nunatak',type:'Ice flow and crevasses',lat:-72,lng:30,color:TONE.water,real:true,docOnly:true,
 whatHappened:'NISAR L-band radar imaged Nunatak Zaterjavshijsja, a mountaintop in East Antarctica that sticks out of an ice stream flowing northeast toward the ocean. The data were collected in August 2025 during satellite testing. In the radar image the mountain looks like a hummingbird.',
 howNisarSaw:'JPL\'s color image (not shown here): magenta marks horizontal returns, typical of smooth ice. Green marks vertical returns, from radar going into snow and ice or from rough crevasse faces. White means strong returns in both. Crevasses appear as sharp green lines, while a Landsat 9 optical image from November 2, 2025 looks almost entirely white.',
 whyItMatters:'Crevasse patterns show where ice is being stressed as it flows. Radar works through polar night and cloud, so it can watch ice that cameras cannot.',
 timeline:[],layers:[],
 radar:{band:'L-band',pols:[],text:'The source says horizontal polarization was transmitted over Antarctica and the colors come from comparing horizontal and vertical returns. It does not give the exact channel combination of the colors, so we do not tick any polarization.'},
 sci:{drivers:'The moving glacier stresses the ice as it flows past the mountain and fractures the surface into crevasses (NASA/JPL).',pol:'Comparing horizontal and vertical returns separates smooth surfaces from rough or volume-scattering ones. That is why crevasses stand out.',unseen:'The source gives one acquisition only and no exact date, so there is no before/after here and we make no claim about change.'},
 human:'No people live here, but ice flow feeds sea-level rise, which matters for coastal places such as the Nile Delta.',
 future:'Repeated passes could show how fast crevasse fields open and where ice speeds up.',
 link:'https://www.jpl.nasa.gov/news/us-india-satellite-delivers-data-reveals-hummingbird-in-antarctica/',
 credit:'Source: NASA/JPL (image by Seongsu Jeong, NASA/JPL-Caltech; Landsat 9 by USGS). The source gives no coordinates: the pin is only a placeholder somewhere in East Antarctica. No image is shown here.'},
{id:'northdakota',title:'Farmland along the Forest River, North Dakota',type:'Cropland and irrigation',lat:48.2,lng:-97.5,color:TONE.grow,real:true,docOnly:true,
 whatHappened:'One of NISAR\'s first public images (August 23, 2025) shows wetlands, forests and cropland in northeastern North Dakota. NASA says it separates fallow fields from active cropland and shows circular patterns from center-pivot irrigation.',
 howNisarSaw:'Crops change how much radar energy comes back as they grow, so a field in season looks different from a fallow one. The same idea applies to the Nile Delta and its round desert fields. The source states neither the polarization nor the colors.',
 whyItMatters:'Farmers and planners can follow which fields are planted, irrigated or left fallow, in any weather.',
 timeline:[],layers:[],
 radar:{band:'L-band',pols:[],text:'L-band image from August 2025. The source does not state polarizations or colors, so we do not label them.'},
 sci:{drivers:'Crop growth, irrigation and fallow cycles change leaf and stem structure and soil moisture, which change the echo.',pol:'In general HV follows leaf and stem volume and VV and HH react to soil moisture and stems. This is a general principle: the source does not say which channels this image uses.',unseen:'One image, so no change over time and no measurement of our own.'},
 human:'Agricultural and land-use monitoring is the application NASA names for this image.',
 future:'A new image every 12 days would give a crop-season time series, the kind we still need for the Nile Delta.',
 link:'https://un-spider.org/es/node/13522',
 credit:'Source: NASA first-images release as summarized by UN-SPIDER. Location is approximate (northeastern North Dakota). No image is shown here.'},
{id:'maine',title:'Forests and waterways, Mount Desert Island, Maine',type:'Forest and coast',lat:44.35,lng:-68.3,color:TONE.grow,real:true,docOnly:true,
 whatHappened:'A NISAR L-band image from August 21, 2025 shows water, forests and built-up or bare surfaces on Mount Desert Island. At 5 m resolution it reveals narrow waterways and offshore islets. Water is dark, forest green and built-up or bare ground magenta.',
 howNisarSaw:'Forest canopy scatters radar in many directions (volume scattering), while water reflects it away and looks dark. The source does not state the polarization.',
 whyItMatters:'A stable forest baseline is what later images are compared with to detect forest loss from cutting, fire or storms.',
 timeline:[],layers:[],
 radar:{band:'L-band',pols:[],text:'L-band image, polarization not stated by the source. L-band waves go deep into the canopy. A drop in cross-polarized (HV) echo is the usual sign of canopy loss, which is a general radar principle and not a result from this image.'},
 sci:{drivers:'Not a change case. This is a baseline. Forest loss would reduce volume scattering.',pol:'HV is the usual channel for forest loss. This is a general principle: the image does not state its channels.',unseen:'One date, so we show no forest loss or fire. We have no NISAR scene of deforestation or a wildfire yet.'},
 human:'Coastal forest, water and built-up land sit side by side here, which shows how radar separates them.',
 future:'Repeat passes every 12 days could flag forest loss or burn scars soon after they happen.',
 link:'https://un-spider.org/es/node/13522',
 credit:'Source: NASA first-images release as summarized by UN-SPIDER. No image is shown here.'}
);

/* our own brightness-change analyses */
const KMCH='assets/kmch-img.jpg';
(()=>{const p=PINS.find(x=>x.id==='kamchatka');p.layers.push({name:'Our change map',image:KMCH,description:"Our own brightness-change map. Orange = got brighter, cyan = got darker, after removing the overall brightness shift between the two images. Dimmed = water or edges we left out. See the analysis box for limits."});p.analysis={"title": "Our own analysis (Kamchatka, Jun 18 vs Jun 30)", "body": "We compared the two preview images pixel by pixel on brightness. The second image is about 18 levels lighter everywhere, which looks like a difference in display stretch or conditions rather than real change, so we removed that overall shift. After that, only about 1.6% of the usable land changed clearly (0.5% brighter and 1.1% darker at our main threshold), in small scattered patches near the volcano slopes and the lake. The estimate runs from about 0.2% to 14% as the threshold gets looser. No lava outline stands out, which matches NASA's note that a lava field is tiny at this scale. About 47% of the picture was usable (we left out white margins, sea and dark water).", "limits": "Limits: we compare brightness only, because the link between colors and polarizations is not confirmed for this image. These are 8-bit preview images, not calibrated radar values. Brighter does not prove a cause: it can also be wet or fresh snow, or the viewing angle. The thresholds are our own choice. Code: analysis/compare_brightness.py."}})();
const AKCH='assets/akch-img.jpg';
(()=>{const p=PINS.find(x=>x.id==='alaska');p.layers.push({name:'Our change map',image:AKCH,description:"Our own brightness-change map. Orange = got brighter, cyan = got darker, after removing the overall brightness shift between the two images. Dimmed = water or edges we left out. See the analysis box for limits."});p.analysis={"title": "Our own analysis (Alaska, Nov 26 vs Dec 8)", "body": "After removing a small overall shift (about 8 levels), about 6% of the usable picture got brighter and only 0.3% got darker at our main threshold. The range is about 4.5% to 9% as the threshold changes. The brighter patches sit mostly on steep slopes and ridgelines beside the glacier. That fits fresh avalanche and landslide debris, which is rough, but steep slopes also change with new or wet snow and with the radar's viewing angle, so we cannot say how much of it is debris. NASA describes debris on the flatter parts of the glacier, and our simple method does not isolate those.", "limits": "Limits: we compare brightness only, because the link between colors and polarizations is not confirmed for this image. These are 8-bit preview images, not calibrated radar values. Brighter does not prove a cause: it can also be wet or fresh snow, or the viewing angle. The thresholds are our own choice. Code: analysis/compare_brightness.py."}})();
const VECH='assets/vech-img.jpg';
(()=>{const p=PINS.find(x=>x.id==='venezuela');p.layers.push({name:'Our change map',image:VECH,description:"Our own brightness-change map. Orange = got brighter, cyan = got darker, after removing the overall brightness shift between the two images. Dimmed = water or edges we left out. See the analysis box for limits."});p.analysis={"title": "Our own analysis (Venezuela, before vs after the quakes)", "body": "Land brightness barely moved: only about 1.6% of the usable land got brighter and 0.2% got darker at our main threshold (0.2% to about 7.6% as the threshold loosens), and there was no overall shift between the two images. We left out the sea, because wind and waves change it without any damage. This is the point of the example: two big earthquakes moved the ground up to about 60 cm and brightness hardly changed. The movement shows only in the phase of the radar signal (NASA's displacement map), which we cannot compute from color images. About 37% of the picture was usable.", "limits": "Limits: we compare brightness only, because the link between colors and polarizations is not confirmed for this image. These are 8-bit preview images, not calibrated radar values. Brighter does not prove a cause: it can also be wet or fresh snow, or the viewing angle. The thresholds are our own choice. Code: analysis/compare_brightness.py."}})();
const CMP={"pol": [["HH", "Sends horizontal, receives horizontal (co-polarized)", "Smooth water (dark), buildings and flooded vegetation (bright double bounce), lava", "Mozambique, Kamchatka"], ["HV", "Sends horizontal, receives vertical (cross-polarized)", "Leaves, branches, forest and crop volume. Drops when canopy is lost", "Not shown in our current maps"], ["VV", "Sends vertical, receives vertical (co-polarized)", "Rough water, bare soil and crop stems. Sensitive to soil moisture", "Not shown in our sources"], ["HH/HV ratio", "Bright where HH is strong and HV is weak", "Separates flooded vegetation from open water and dry land", "Not shown in our current maps"]], "freq": [["L-band (NASA/JPL)", "24 cm", "Passes through cloud, ash and most leaves. Best for forest structure, flooding under plants and ground motion (down to 4 mm per year)"], ["S-band (ISRO)", "9.4 cm", "Sensitive to light vegetation. Useful for crops, coasts and polar regions"], ["C-band (Sentinel-1, ESA)", "about 5.5 cm", "Stops at the top of the canopy. Good for crops, but sees less of what is under leaves"]]};
const PERSONAL='';/* Write your own story about the Nile Delta / your hometown here (a few sentences). It appears in the Story and in the Delta panel. */
const STORY=[{"title": "The planet is always moving", "text": "Volcanoes build, quakes shift the ground, rivers flood, farms replace desert. Most of it is hard to see from the ground. Radar from space can watch it all, day or night, through cloud.", "view": null}, {"title": "How radar sees change", "text": "The satellite sends its own microwave pulse and listens to the echo. Smooth water echoes away and looks dark. Rough lava, debris and buildings echo back and look bright. NISAR's long L-band waves reach through cloud, ash and leaves, and it returns every 12 days. Press Compare radar at the top for the full table of polarizations and bands.", "view": null}, {"title": "Kamchatka: a volcano wakes up", "text": "After a magnitude 8.8 quake in July 2025, Krasheninnikov erupted for the first time in nearly five centuries. NISAR HH radar has watched the lava since December 2025, because lava reflects microwaves more strongly than snow.", "pin": "kamchatka"}, {"title": "Alaska: rock and ice on the move", "text": "A magnitude 7.0 quake on December 6, 2025 shook the St. Elias mountains. Debris from hundreds of landslides made the smooth glacier look rough to the radar, two days later.", "pin": "alaska"}, {"title": "Venezuela: the ground itself shifts", "text": "The pictures look alike. The radar phase tells the story: after two big quakes, the ground moved up to about 60 centimeters. Brightness alone would have missed it.", "pin": "venezuela"}, {"title": "Mozambique: when rivers take the land", "text": "Between January 5 and 17, 2026, water spread across the Limpopo floodplain. In our HH radar maps the river is a thin dark line on January 5 and a wide dark band on January 17: about 199 km² of new open water.", "pin": "mozambique"}, {"title": "The Nile Delta: farms, cities and sand", "text": "Here people are the main driver. Cities spread over fields, desert farms spread outward, and the land sinks as the sea rises. NISAR can follow all three, one pass every 12 days.", "pin": "delta"}, {"title": "Mexico City: a city sinking", "text": "NASA mapped parts of Mexico City sinking more than 2 cm a month in the 2025-26 dry season, from groundwater pumping and the weight of the city. Radar phase makes this visible. This is a documented case: we show no image.", "pin": "mexico"}, {"title": "Antarctica: ice under stress", "text": "L-band radar shows crevasses as sharp lines around a mountaintop poking through an ice stream, where an optical image looks almost entirely white. Documented case, no image shown.", "pin": "antarctica"}, {"title": "Farmland and forests", "text": "NISAR's first images already separate fallow fields from active cropland in North Dakota and forest from water in Maine. These are the baselines for tracking crops and forest loss. Documented cases, no images shown.", "pin": "northdakota"}, {"title": "Your place, your story", "text": "__PERSONAL__", "pin": "delta", "personal": true}, {"title": "What comes next", "text": "NISAR will image all of Earth's land and ice about every 12 days, with free and open data. That means faster disaster maps, better crop and forest monitoring, and long records of moving ground and ice. Explore the globe yourself.", "view": null}];

/* ============================== STATE & HELPERS ============================== */
const $=(s,r=document)=>r.querySelector(s);
const state={cat:null,visited:new Set(),current:null,timer:null,endShown:false};
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.addEventListener('error',e=>{const i=e.target;if(i.tagName==='IMG'&&!i.dataset.f){i.dataset.f=1;i.src=FALLBACK}},true);
$('#sub').textContent=T.sub;$('#hint .tx').textContent=T.hint;$('#hintx').onclick=()=>{$('#hint').style.display='none'};$('#foot').textContent=T.foot;
const updateProgress=()=>$('#prog').textContent=T.progress(state.visited.size,PINS.length);
updateProgress();

/* ============================== GLOBE ============================== */
const gEl=$('#globe'),gw=()=>gEl.clientWidth,gh=()=>gEl.clientHeight;
const pinEls={};
const globe=Globe()($('#globe'))
 .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe@2.45.6/example/img/earth-night.jpg')
 .bumpImageUrl('https://cdn.jsdelivr.net/npm/three-globe@2.45.6/example/img/earth-topology.png')
 .backgroundColor('rgba(0,0,0,0)')
 .atmosphereColor('#6aa8ff').atmosphereAltitude(0.22)
 .width(gw()).height(gh())
 .htmlElementsData(PINS).htmlLat('lat').htmlLng('lng')
 .htmlElement(p=>{
   const b=document.createElement('button');b.className='pin';b.style.setProperty('--c',p.color);
   b.setAttribute('aria-label',p.title);b.innerHTML=`<span class="tip">${p.title}</span>`;
   b.onclick=()=>openPin(p);pinEls[p.id]=b;return b;});
globe.controls().autoRotate=!reduce;globe.controls().autoRotateSpeed=.5;
globe.pointOfView({lat:25,lng:20,altitude:2.4});
addEventListener('resize',()=>globe.width(gw()).height(gh()));

/* ============================== FORCES (left list) ============================== */
const CATS=[
 {id:'earthquakes',label:'Earthquakes',ic:'<path d="M3 12h4l3-7 4 14 3-7h4"/>'},
 {id:'volcanoes',label:'Volcanoes',ic:'<path d="M3 20l6.5-12 2.5 4.5 2.5-3.5L21 20z"/>'},
 {id:'floods',label:'Floods',ic:'<path d="M3 8c2.5-2 4.5 2 7 0s4.5-2 7 0 3 .5 4 0M3 13c2.5-2 4.5 2 7 0s4.5-2 7 0 3 .5 4 0M3 18c2.5-2 4.5 2 7 0s4.5-2 7 0 3 .5 4 0"/>'},
  {id:'agriculture',label:'Farmland',ic:'<path d="M12 21V9M12 13c-3 0-5-2-5-5 3 0 5 2 5 5zM12 15c3 0 5-2 5-5-3 0-5 2-5 5z"/>'},
  {id:'forests',label:'Forests',ic:'<path d="M12 3l-5 8h3l-4 6h12l-4-6h3z"/><path d="M12 17v4"/>'},
 {id:'glaciers',label:'Glaciers',ic:'<path d="M12 2v20M3.5 7l17 10M3.5 17l17-10"/>'},
 {id:'subsidence',label:'Land subsidence',ic:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 17l9 5 9-5"/>'}
];
/* which force(s) each place belongs to (a place can belong to more than one) */
const PIN_CATS={kamchatka:['volcanoes'],alaska:['earthquakes','glaciers'],venezuela:['earthquakes'],mozambique:['floods'],delta:['agriculture','subsidence'],mexico:['subsidence'],antarctica:['glaciers'],northdakota:['agriculture'],maine:['forests']};
PINS.forEach(p=>p.cats=PIN_CATS[p.id]||[]);
const forcesEl=$('#forces');
forcesEl.innerHTML=CATS.map(c=>{
  const ps=PINS.filter(p=>p.cats.includes(c.id));
  return `<div class="fg" data-c="${c.id}"><button class="force" data-c="${c.id}" aria-expanded="false"><span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">${c.ic}</svg></span><span class="lb">${c.label}</span><span class="ct">${ps.length}</span></button><div class="plist">${ps.length?ps.map(p=>`<button class="pl" data-p="${p.id}">${p.title}</button>`).join(''):`<p class="none">${T.noPlaces}</p>`}</div></div>`;
}).join('');
forcesEl.querySelectorAll('.force').forEach(b=>b.onclick=()=>setCat(state.cat===b.dataset.c?null:b.dataset.c,{fly:true}));
forcesEl.querySelectorAll('.pl').forEach(b=>b.onclick=()=>openPin(PINS.find(p=>p.id===b.dataset.p)));
function setCat(id,o={}){
  state.cat=id;
  forcesEl.querySelectorAll('.fg').forEach(g=>{const on=g.dataset.c===id;g.classList.toggle('on',on);g.querySelector('.force').setAttribute('aria-expanded',on)});
  PINS.forEach(p=>{const el=pinEls[p.id];if(el)el.classList.toggle('on',!!id&&p.cats.includes(id))});
  if(!o.fly)return;
  if($('#panel').classList.contains('open'))closePanel();
  const ps=id?PINS.filter(p=>p.cats.includes(id)):[];
  if(!id){if(!reduce)globe.controls().autoRotate=true;globe.pointOfView({altitude:2.4},900);return}
  if(!ps.length)return;
  globe.controls().autoRotate=false;
  const la=ps.map(p=>p.lat),ln=ps.map(p=>p.lng);
  const spread=Math.max(Math.max(...la)-Math.min(...la),Math.max(...ln)-Math.min(...ln));
  if(ps.length===1||spread>150)globe.pointOfView({lat:ps[0].lat,lng:ps[0].lng,altitude:1.8},1200);
  else globe.pointOfView({lat:la.reduce((x,y)=>x+y)/ps.length,lng:ln.reduce((x,y)=>x+y)/ps.length,altitude:Math.min(3,1.6+spread/55)},1200);
}

/* ============================== PANEL ============================== */
function openPin(p){
  clearInterval(SS.t);$('#story').classList.remove('show');document.body.classList.remove('story');
  state.current=p;clearInterval(state.timer);state.timer=null;
  if(!(state.cat&&p.cats.includes(state.cat)))setCat(p.cats[0]||null);
  $('#hint').style.opacity=0;
  globe.controls().autoRotate=false;
  globe.pointOfView({lat:p.lat,lng:p.lng,altitude:1.3},1200);
  state.visited.add(p.id);pinEls[p.id].classList.add('seen');updateProgress();
  const slides=cartoonSlides(p);
  const panel=$('#panel');
  panel.innerHTML=`
   <button class="x" aria-label="Close">&times;</button>
   <div class="ph"><h2>${p.title}</h2><p class="type" style="margin:0">${p.type}${p.docOnly?'<span class="tag" style="background:var(--ice)">Documented case</span>':'<span class="tag real">Real NISAR image</span>'}</p></div>
   <div class="cstage">${slides.map((x,i)=>`<section class="cs" aria-label="${x.t}">${x.h}</section>`).join('')}</div>
   <div class="dnav"><button class="nv" id="prv" aria-label="Previous">&#8249;</button><div class="dots">${slides.map((x,i)=>`<button class="dot" data-i="${i}" aria-label="${i+1}: ${x.t}"></button>`).join('')}</div><button class="nv" id="nxt" aria-label="Next">&#8250;</button></div>`;
  panel.classList.add('open');
  $('.x',panel).onclick=closePanel;
  initSlider(p);
  $('#mkrep').onclick=()=>showReport(p);
  initDeck(slides.length);
}
/* ============================== CARTOON STORY (panel) ==============================
   Each place is told in 4 short animated cartoon slides, with the satellite "Raqeeb" as narrator.
   To change a caption, edit TOON below (text only, one line per slide). */
const house=(x,y,w=34,h=26,roof='#e5634d')=>`<g><rect class="o" x="${x}" y="${y}" width="${w}" height="${h}" fill="#ffe7b0"/><path class="o" d="M${x-4} ${y}L${x+w/2} ${y-16}L${x+w+4} ${y}Z" fill="${roof}"/><rect class="o" x="${x+w/2-4}" y="${y+h-12}" width="8" height="12" fill="#a56a3a"/></g>`;
const tree=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><rect class="o" x="-3" y="-12" width="6" height="12" fill="#8a5a2b"/><circle class="o" cx="0" cy="-20" r="11" fill="#4fae4f"/></g>`;
const fir=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><rect class="o" x="-2.5" y="-8" width="5" height="8" fill="#8a5a2b"/><path class="o" d="M0 -40L-11 -10H11Z" fill="#3f9a5c"/></g>`;
const cloud=(x,y,s=1,c='#fff')=>`<g transform="translate(${x} ${y}) scale(${s})"><path class="o" d="M0 0Q-2 -12 12 -12Q16 -24 32 -18Q46 -22 48 -8Q60 -6 56 4Q56 12 44 10H8Q-4 12 0 0Z" fill="${c}"/></g>`;
const stars=n=>Array.from({length:n},(_,i)=>`<circle class="tw" cx="${(i*67+23)%310+5}" cy="${(i*41+9)%92+4}" r="${i%3?1.2:1.8}" fill="#fff" style="animation-delay:${(i%5)*.4}s"/>`).join('');
const mascot=(w=56)=>`<svg viewBox="0 0 64 64" width="${w}" height="${w}" aria-hidden="true"><g class="o"><rect x="2" y="24" width="14" height="16" rx="2" fill="#3a7bd5"/><rect x="48" y="24" width="14" height="16" rx="2" fill="#3a7bd5"/><rect x="16" y="14" width="32" height="34" rx="9" fill="#eef3ff"/><path d="M32 14V7" fill="none"/></g><circle class="o ant" cx="32" cy="5" r="3" fill="#ff6b6b"/><rect x="21" y="22" width="22" height="16" rx="6" fill="#101a33"/><g class="eyes" fill="#5ee0c8"><circle cx="28" cy="30" r="3.2"/><circle cx="36" cy="30" r="3.2"/></g><path d="M28 41Q32 45 36 41" fill="none" stroke="#0b1224" stroke-width="2.2" stroke-linecap="round"/></svg>`;
const SCENES={
quake:()=>`<rect width="320" height="200" fill="#8fd3ff"/><circle class="o" cx="276" cy="34" r="15" fill="#ffe27a"/>${cloud(40,42,.8)}<path class="o" d="M0 124Q60 96 120 122T240 116T320 124V200H0Z" fill="#7cc576"/><rect class="o" x="-2" y="140" width="324" height="62" fill="#b9854f"/><rect class="o" x="-2" y="140" width="324" height="9" fill="#69b85a"/><g class="shake">${house(38,114)}${house(128,114)}${house(230,114)}</g><path class="o crack" d="M150 150L160 164L152 176L164 190L158 202L190 202L184 190L192 176L182 164L190 150Z" fill="#3a2414"/><g fill="none" stroke="#fff" stroke-width="3"><circle class="ring" cx="170" cy="188" r="60"/><circle class="ring d2" cx="170" cy="188" r="60"/><circle class="ring d3" cx="170" cy="188" r="60"/></g>`,
volcano:()=>`<rect width="320" height="200" fill="#8fd3ff"/>${cloud(24,44,.8)}${cloud(238,34,.7)}<rect class="o" x="-2" y="168" width="324" height="34" fill="#7cc576"/><path class="o" d="M52 172L128 72L148 64H192L212 72L288 172Z" fill="#7a4b3a"/><path class="o" d="M148 64Q170 52 192 64Z" fill="#ff7a1a"/><path class="lava" pathLength="100" d="M162 66Q150 100 168 122Q150 150 176 172" fill="none" stroke="#ff7a1a" stroke-width="8" stroke-linecap="round"/><path class="lava l2" pathLength="100" d="M184 66Q198 96 188 122Q206 146 196 172" fill="none" stroke="#ffb02e" stroke-width="5" stroke-linecap="round"/><g class="puff"><circle class="o" cx="170" cy="48" r="12" fill="#aab2c0"/><circle class="o" cx="186" cy="40" r="10" fill="#aab2c0"/><circle class="o" cx="156" cy="40" r="9" fill="#aab2c0"/></g><g class="puff p2"><circle class="o" cx="170" cy="48" r="12" fill="#98a1b2"/><circle class="o" cx="186" cy="40" r="10" fill="#98a1b2"/><circle class="o" cx="156" cy="40" r="9" fill="#98a1b2"/></g><g class="puff p3"><circle class="o" cx="170" cy="48" r="12" fill="#aab2c0"/><circle class="o" cx="186" cy="40" r="10" fill="#aab2c0"/></g><circle class="spark" cx="170" cy="58" r="3" fill="#ffb02e"/><circle class="spark s2" cx="176" cy="58" r="3" fill="#ff7a1a"/>`,
flood:()=>`<rect width="320" height="200" fill="#9db4cc"/>${cloud(30,40,1,'#d3dae5')}${cloud(190,34,1.1,'#c3ccda')}<g class="rain" stroke="#4a7fc0" stroke-width="2.5" stroke-linecap="round">${Array.from({length:9},(_,i)=>`<path style="animation-delay:${(i%4)*.2}s" d="M${34+i*30} 62l-3 9"/>`).join('')}</g><rect class="o" x="-2" y="130" width="324" height="72" fill="#7cc576"/>${house(40,104)}${house(206,104,38,26,'#4a89d9')}${tree(130,130)}${tree(286,130,.9)}<g class="rise"><path class="o" d="M-4 140Q16 132 36 140T76 140T116 140T156 140T196 140T236 140T276 140T316 140T356 140V210H-4Z" fill="#3aa0f0" fill-opacity=".92"/></g>`,
avalanche:()=>`<rect width="320" height="200" fill="#cfe8ff"/><circle class="o" cx="268" cy="34" r="14" fill="#ffe27a"/><path class="o" d="M168 172L238 70L304 172Z" fill="#a3b1c7"/><path class="o" d="M10 172L124 36L232 172Z" fill="#8b9bb4"/><path class="o" d="M124 36L98 80L114 72L124 90L140 70L158 82Z" fill="#fff"/><g class="slab"><path class="o" d="M110 98L142 90L152 112L120 122Z" fill="#fff"/></g><g class="puffs"><circle cx="168" cy="160" r="12" fill="#fff" class="o"/><circle cx="186" cy="154" r="9" fill="#fff" class="o"/></g><rect class="o" x="-2" y="168" width="324" height="34" fill="#eef6ff"/><g class="shake">${fir(36,176)}${fir(58,178,.8)}${fir(262,176)}${fir(288,178,.8)}</g>`,
delta:()=>{let f='',n=0;for(let y=56;y<=140;y+=15)for(let x=40;x<=280;x+=17){if(Math.abs(x+7-160)<(y-20)*.9){f+=`<rect class="o fld" x="${x}" y="${y}" width="13" height="11" fill="${['#a6d86a','#5fae4f','#d7e07a','#7cc576'][n%4]}" style="animation-delay:${(n%7)*.35}s"/>`;n++}}return `<rect width="320" height="200" fill="#ead9a1"/><path class="o" d="M160 22L36 152Q160 168 284 152Z" fill="#9bd28a"/>${f}<g fill="none" stroke="#3aa0f0" stroke-width="5" stroke-linecap="round"><path class="flow" d="M160 24C150 70 110 100 70 152"/><path class="flow" d="M160 24C162 80 160 110 160 158"/><path class="flow" d="M160 24C170 70 210 100 252 152"/></g><rect class="o" x="150" y="14" width="9" height="9" fill="#cfd6e0"/><rect class="o" x="161" y="17" width="8" height="8" fill="#b8c1cf"/><rect class="o" x="38" y="144" width="9" height="9" fill="#cfd6e0"/><rect class="o" x="-2" y="156" width="324" height="46" fill="#3aa0f0"/><path class="wv" d="M-20 170Q-8 164 4 170T28 170T52 170T76 170T100 170T124 170T148 170T172 170T196 170T220 170T244 170T268 170T292 170T316 170T340 170" fill="none" stroke="#bfe6ff" stroke-width="3"/>`},
pivot:()=>`<rect width="320" height="200" fill="#e3cf8f"/>${[[78,60,'#6dbb5a',7],[210,56,'#c8d86a',9],[78,142,'#4fae4f',11],[210,142,'#8ccf6a',8]].map(([x,y,c,d])=>`<circle class="o" cx="${x}" cy="${y}" r="40" fill="${c}"/><circle cx="${x}" cy="${y}" r="26" fill="none" stroke="#ffffff55" stroke-width="2"/><g transform="translate(${x} ${y})"><g class="arm" style="animation-duration:${d}s"><path d="M0 0H40" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><circle cx="40" cy="0" r="3.5" fill="#fff"/></g></g>`).join('')}<path class="o" d="M284 8Q312 14 308 44Q296 62 276 48Q262 26 284 8Z" fill="#5fb4e8"/><circle class="o" cx="146" cy="104" r="6" fill="#3f9a5c"/><circle class="o" cx="156" cy="112" r="5" fill="#3f9a5c"/><circle class="o" cx="140" cy="114" r="5" fill="#4fae4f"/>`,
sink:()=>`<rect width="320" height="200" fill="#cfe3f5"/>${cloud(30,40,.9)}${cloud(220,52,.7)}<path class="o" d="M-2 150H104Q160 172 216 150H322V202H-2Z" fill="#b9854f"/><path d="M-2 150H104Q160 172 216 150H322" fill="none" stroke="#69b85a" stroke-width="7"/><g class="o" fill="#e4e9f2"><rect x="30" y="98" width="42" height="52"/><rect x="226" y="88" width="40" height="62"/></g><g class="sinkb"><rect class="o" x="104" y="70" width="56" height="86" fill="#f1d9a6"/><g fill="#7fb7e8" stroke="#0b1224" stroke-width="1.5"><rect x="112" y="80" width="12" height="12"/><rect x="138" y="80" width="12" height="12"/><rect x="112" y="102" width="12" height="12"/><rect x="138" y="102" width="12" height="12"/><rect x="112" y="124" width="12" height="12"/><rect x="138" y="124" width="12" height="12"/></g></g><g fill="#7fb7e8" stroke="#0b1224" stroke-width="1.5"><rect x="38" y="108" width="10" height="10"/><rect x="54" y="108" width="10" height="10"/><rect x="38" y="126" width="10" height="10"/><rect x="54" y="126" width="10" height="10"/><rect x="234" y="98" width="10" height="10"/><rect x="250" y="98" width="10" height="10"/><rect x="234" y="118" width="10" height="10"/><rect x="250" y="118" width="10" height="10"/></g><path d="M120 164L128 176L122 188M176 162L168 176L176 190" fill="none" stroke="#3a2414" stroke-width="3" stroke-linecap="round"/><g class="bounce"><path style="stroke:#e5534b" d="M292 40V92M278 80L292 98L306 80" fill="none" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></g>`,
ice:()=>`<rect width="320" height="200" fill="#0f1b3d"/>${stars(26)}<circle cx="268" cy="34" r="14" fill="#f3f0d8"/><circle cx="262" cy="30" r="14" fill="#0f1b3d"/><path class="o" d="M-2 112Q80 96 160 112T322 106V202H-2Z" fill="#dff1ff"/><path class="o" d="M126 112L152 62L164 78L176 56L204 112Z" fill="#5b4a43"/><path d="M152 62L146 76L156 72L164 80L170 66L176 56L166 62Z" fill="#fff" stroke="#0b1224" stroke-width="2" stroke-linejoin="round"/><g fill="none" stroke="#2f6fb5" stroke-width="3" stroke-linecap="round"><path class="crev" pathLength="100" d="M40 150Q70 138 100 152"/><path class="crev c2" pathLength="100" d="M200 140Q240 126 290 144"/><path class="crev c3" pathLength="100" d="M70 178Q120 164 170 180"/><path class="crev c4" pathLength="100" d="M220 176Q260 164 300 178"/></g><g class="flowarr"><path d="M30 126H70M60 118L72 126L60 134" fill="none" stroke="#7aa9d6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>`,
forest:()=>`<rect width="320" height="200" fill="#8fd3ff"/><circle class="o" cx="52" cy="38" r="15" fill="#ffe27a"/>${cloud(190,40,.9)}<rect class="o" x="-2" y="132" width="324" height="72" fill="#3aa0f0"/><path class="wv" d="M-20 150Q-8 144 4 150T28 150T52 150T76 150T100 150T124 150T148 150T172 150T196 150T220 150T244 150T268 150T292 150T316 150T340 150" fill="none" stroke="#bfe6ff" stroke-width="3"/><path class="o" d="M40 142Q58 90 110 94Q160 70 214 96Q268 96 282 142Q160 156 40 142Z" fill="#69b85a"/><path d="M130 100Q150 118 138 132" fill="none" stroke="#3aa0f0" stroke-width="5" stroke-linecap="round"/>${[[76,128],[100,118],[168,112],[196,122],[230,126],[250,134]].map(([x,y],i)=>`<g class="sway" style="animation-delay:${i*.3}s">${tree(x,y,.9)}</g>`).join('')}<circle class="o" cx="304" cy="160" r="6" fill="#69b85a"/>`,
radar:()=>`<defs><linearGradient id="rg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1f45"/><stop offset="1" stop-color="#3b78c4"/></linearGradient></defs><rect width="320" height="200" fill="url(#rg)"/>${stars(14)}<path class="beam" d="M156 56L96 172H224L164 56Z" fill="#5ee0c8"/><g class="bob"><rect class="o" x="104" y="22" width="40" height="16" fill="#3a7bd5"/><path d="M117 22V38M130 22V38" stroke="#0b1224" stroke-width="1.5"/><rect class="o" x="176" y="22" width="40" height="16" fill="#3a7bd5"/><path d="M189 22V38M202 22V38" stroke="#0b1224" stroke-width="1.5"/><rect class="o" x="144" y="14" width="32" height="30" rx="6" fill="#eef3ff"/><rect x="150" y="20" width="20" height="14" rx="5" fill="#101a33"/><g class="eyes" fill="#5ee0c8"><circle cx="156" cy="27" r="2.6"/><circle cx="164" cy="27" r="2.6"/></g><path class="o" d="M138 48Q160 66 182 48Z" fill="#ffd24a"/></g><g fill="none" stroke="#5ee0c8" stroke-width="3" stroke-linecap="round"><path class="wave" d="M130 84Q160 98 190 84"/><path class="wave w2" d="M130 84Q160 98 190 84"/><path class="wave w3" d="M130 84Q160 98 190 84"/></g><g class="drift">${cloud(48,128,1.15,'#eef2f9')}</g><g class="drift d2">${cloud(196,118,1.2,'#e4eaf4')}</g><path class="o" d="M-2 170Q80 158 160 170T322 170V202H-2Z" fill="#5a8f4e"/><path class="echo" d="M146 166V128M174 166V128" stroke="#ffd24a" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="3 9"/>`,
earth:()=>`<defs><clipPath id="ec"><circle cx="160" cy="108" r="62"/></clipPath><linearGradient id="eg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1f45"/><stop offset="1" stop-color="#1c3f7a"/></linearGradient></defs><rect width="320" height="200" fill="url(#eg)"/>${stars(18)}<circle class="o" cx="160" cy="108" r="62" fill="#3aa0f0"/><g clip-path="url(#ec)"><g class="spinland"><g fill="#69b85a" stroke="#0b1224" stroke-width="2"><path id="ct" d="M110 84Q130 70 150 86Q158 104 140 116Q124 124 112 108Z"/><path d="M168 108Q190 96 206 112Q202 134 180 140Q164 128 168 108Z"/><path d="M214 76Q232 70 240 88Q230 100 216 94Z"/><path d="M234 96Q256 88 270 104Q262 124 244 122Z"/><path d="M286 100Q306 96 312 116Q300 130 288 122Z"/></g><g fill="#69b85a" stroke="#0b1224" stroke-width="2" transform="translate(-248 0)"><path d="M110 84Q130 70 150 86Q158 104 140 116Q124 124 112 108Z"/><path d="M168 108Q190 96 206 112Q202 134 180 140Q164 128 168 108Z"/><path d="M214 76Q232 70 240 88Q230 100 216 94Z"/><path d="M234 96Q256 88 270 104Q262 124 244 122Z"/><path d="M286 100Q306 96 312 116Q300 130 288 122Z"/></g></g></g><circle cx="160" cy="108" r="62" fill="none" stroke="#0b1224" stroke-width="2.5"/><g class="drop"><path class="o" d="M160 52C148 52 142 60 142 68C142 80 160 94 160 94C160 94 178 80 178 68C178 60 172 52 160 52Z" fill="#ff6b6b"/><circle cx="160" cy="68" r="6" fill="#fff"/></g><circle r="5" fill="#ffd24a" stroke="#0b1224" stroke-width="2"><animateMotion dur="7s" repeatCount="indefinite" path="M40 150Q160 20 280 150Q160 190 40 150Z"/></circle>`
};
const TOON={
kamchatka:{scene:'volcano',s:[
 'A huge earthquake in July 2025 woke up Krasheninnikov volcano. It erupted for the first time in almost 500 years.',
 'NISAR has watched it since December 25, 2025. Radar sees through ash, clouds and darkness.',
 'At this wide view the two June dates look alike, because a lava field is small. Our simple check flagged about 1.6% of usable land as different. Brightness alone is not proof of an eruption.',
 'These volcanoes are remote and often hidden by cloud and ash. Repeated radar images help scientists watch lava safely and warn flights and nearby communities.']},
alaska:{scene:'avalanche',s:[
 'On December 6, 2025 a magnitude 7.0 earthquake shook the St. Elias Mountains on the Yukon-Alaska border. It set off hundreds of landslides and avalanches (USGS mapped more than 700).',
 'Rough surfaces send more radar back and look bright. Smooth ones look dark. Radar also works through winter darkness and cloud.',
 'On December 8, debris made flat parts of the glacier look rougher. About 6% of the scene got brighter, mostly on steep slopes. These are our marks, not confirmed changes.',
 'Remote mountains in winter are hard to survey from the ground or with normal cameras. Radar shows where debris landed, so scientists can map the damage.']},
venezuela:{scene:'quake',s:[
 'On June 24, 2026 two strong earthquakes (7.2 and 7.5, less than a minute apart) struck northern Venezuela. More than 5,000 people were killed, according to official figures reported in July 2026.',
 'Radar can do more than take pictures. By comparing the signal before and after, it can measure how far the ground moved.',
 'In plain brightness the two dates look very similar (about 1.8% changed). But NASA found the ground moved up to about 60 centimeters, mostly sideways, using the radar phase (a method called InSAR).',
 'After a big earthquake, roads and mobile networks may be down. Radar images from space show where the land changed, so teams can decide where to look first.']},
mozambique:{scene:'flood',s:[
 'In January 2026, weeks of heavy rain made the Limpopo and Incomati rivers flood around Chókwè. Roads were cut and people had to leave. At least 600,000 people were affected (NASA).',
 'Calm water bounces radar away from the satellite, so flooded land looks dark. Radar sees through rain clouds too.',
 'On January 5 the river is a thin dark line. By January 17 a wide dark band covers the floodplain. Our estimate: about 199 km² of new open water, probably a minimum.',
 'Flood maps made through clouds show which roads are cut and which fields are under water, so help can go to the right places.']},
delta:{scene:'delta',s:[
 'The Nile Delta is where the river meets the Mediterranean. Cairo sits at the tip of the delta and Alexandria on the coast. It is densely farmed and densely populated.',
 'Radar looks down on all of it, day or night, in any weather.',
 'We have only one image of the delta so far, so we have not measured any change. A second date is needed.',
 'Millions of people live and farm here. Radar lets planners watch farmland, cities and coastal lakes change through the seasons and years.']},
mexico:{scene:'sink',stat:'2+ cm / month',s:[
 'About 20 million people live in and around Mexico City. NASA and JPL mapped parts of the ground that are sinking.',
 'NISAR measured the ground from October 25, 2025 to January 17, 2026, during the dry season.',
 'NASA found dark blue areas sinking more than 2 cm per month, and parts of the city up to a few centimeters per month. This is NASA\'s finding, not measured by us.',
 'Uneven sinking cracks pipes, roads and buildings. A regular ground-motion map shows which neighborhoods sink fastest.']},
antarctica:{scene:'ice',stat:'Cracks seen by radar',s:[
 'Nunatak Zaterjavshijsja is a mountaintop in East Antarctica, sticking out of an ice stream that flows toward the ocean. In the radar image it looks like a hummingbird.',
 'The image was taken in August 2025, during satellite testing. L-band radar works through polar night and cloud.',
 'The radar shows crevasses (deep cracks in the ice) that do not show in optical images. This is a documented NASA case with one image.',
 'Crevasse patterns show where ice is being stressed as it flows. Radar can watch ice that cameras cannot.']},
northdakota:{scene:'pivot',stat:'Circles = irrigation',s:[
 'One of NISAR\'s first public images (August 23, 2025) shows wetlands, forests and cropland in northeastern North Dakota.',
 'Radar can tell fallow fields from active cropland, in any weather.',
 'It also shows round patterns made by center-pivot irrigation. This is a documented NASA case with one image.',
 'Farmers and planners can follow which fields are planted, irrigated or left fallow.']},
maine:{scene:'forest',stat:'5 m detail',s:[
 'A NISAR image from August 21, 2025 shows Mount Desert Island in Maine: water, forest, and built-up or bare land.',
 'Radar separates them. In this false-color image, water is dark, forest is green and built-up or bare ground is magenta.',
 'At 5 meter detail it shows narrow waterways and offshore islets. No forest loss is shown. This is a documented NASA case with one image.',
 'A stable forest baseline is what later images are compared with, to spot forest loss from cutting, fire or storms.']}
};
const KICK=['What happened','How NISAR sees it','What changed','Why it matters'];
function cartoonSlides(p){
  const t=TOON[p.id]||{scene:'earth',s:[p.whatHappened.split('. ')[0]+'.','Radar sees through clouds and darkness.','',p.whyItMatters]};
  const sc=(name,extra='')=>`<div class="cscene"><svg class="sv" viewBox="0 0 320 200" role="img" aria-label="${name}">${SCENES[name]()}</svg>${extra}</div>`;
  const bub=txt=>`<div class="cbub"><div class="mas">${mascot(54)}</div><p>${txt}</p></div>`;
  const rib=(k,i)=>`<span class="rib">${i+1}. ${k}</span>`;
  const S=[];
  S.push({t:KICK[0],h:sc(t.scene,rib(KICK[0],0))+bub(t.s[0])});
  S.push({t:KICK[1],h:sc('radar',rib(KICK[1],1)+`<span class="band">${p.radar.band}${p.radar.pols&&p.radar.pols.length?' · '+p.radar.pols.join(' / '):''}</span>`)+bub(t.s[1])});
  if(p.docOnly){
    S.push({t:'What NASA found',h:sc(t.scene,rib('What NASA found',2)+`<span class="stat">${t.stat||''}</span>`)+bub(t.s[2])});
  }else if(p.single){
    S.push({t:'The real radar',h:`<div class="cscene photo">${rib('The real radar',2)}<div class="single"><img src="${p.beforeImage}" alt="${p.title}"></div></div><p class="ldesc" id="ldesc">${p.layers[0].description}</p>${bub(t.s[2])}${p.credit?`<p class="ldesc note">${p.credit}</p>`:''}`});
  }else{
    S.push({t:'What changed',h:`<div class="cscene photo">${rib('What changed',2)}<div class="cmp" id="cmp" style="aspect-ratio:${p.aspect||'8/5'}"><img src="${p.beforeImage}" alt="Before"><div class="aft">${p.layers.map((l,i)=>`<img class="${i?'':'on'}" src="${l.image}" alt="${l.name}">`).join('')}</div><i class="line"></i><span class="dl">${p.beforeDate}</span><span class="dr">${p.afterDate}</span><input type="range" min="0" max="100" value="50" aria-label="Before and after slider"></div></div>
      ${p.layers.length>1?`<div class="chips">${p.layers.map((l,i)=>`<button class="chip ${i?'':'on'}" data-l="${i}">${l.name}</button>`).join('')}</div>`:''}
      <p class="ldesc" id="ldesc">${p.layers[0].description}</p>${bub(t.s[2])}
      ${p.annotated?`<details class="ann"><summary>${T.annTitle}</summary><img src="${p.annotated}" alt="Annotated before and after radar images"></details>`:''}
      ${p.credit?`<p class="ldesc note">${p.credit}</p>`:''}`});
  }
  S.push({t:KICK[3],h:sc('earth',rib(KICK[3],3))+bub(t.s[3])+(p.docOnly&&p.link?`<p class="ldesc note">Read it at NASA: <a style="color:var(--ice)" href="${p.link}" target="_blank" rel="noopener">${p.link}</a></p>${p.credit?`<p class="ldesc note">${p.credit}</p>`:''}`:'')+`<button class="btn" id="mkrep">${T.report}</button>`});
  return S;
}
const deck={i:0,n:0};
function goDeck(i){
  const n=deck.n,old=deck.i;deck.i=Math.max(0,Math.min(n-1,i));
  document.querySelectorAll('.cs').forEach((el,k)=>{
    el.classList.toggle('on',k===deck.i);el.classList.toggle('past',k<deck.i);
    k===deck.i?el.removeAttribute('inert'):el.setAttribute('inert','');
    if(k===deck.i)el.scrollTop=0;
  });
  document.querySelectorAll('.dot').forEach((d,k)=>d.classList.toggle('on',k===deck.i));
  $('#prv').disabled=deck.i===0;$('#nxt').disabled=deck.i===n-1;
}
function initDeck(n){
  deck.n=n;
  $('#prv').onclick=()=>goDeck(deck.i-1);$('#nxt').onclick=()=>goDeck(deck.i+1);
  document.querySelectorAll('.dot').forEach(d=>d.onclick=()=>goDeck(+d.dataset.i));
  const dk=$('.cstage');let x0=null,y0=null;
  dk.addEventListener('touchstart',e=>{if(e.target.closest('input,.cmp,details'))return x0=null;x0=e.touches[0].clientX;y0=e.touches[0].clientY},{passive:true});
  dk.addEventListener('touchend',e=>{if(x0==null)return;const dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;x0=null;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5)goDeck(deck.i+(dx<0?1:-1))},{passive:true});
  goDeck(0);
}
addEventListener('keydown',e=>{
  if(!$('#panel').classList.contains('open')||e.target.matches('input,textarea,select'))return;
  if(e.key==='ArrowRight')goDeck(deck.i+1);else if(e.key==='ArrowLeft')goDeck(deck.i-1);
});

function closePanel(){
  $('#panel').classList.remove('open');clearInterval(state.timer);state.timer=null;
  if(!reduce)globe.controls().autoRotate=true;
  globe.pointOfView({altitude:2.2},900);
  if(state.visited.size===PINS.length&&!state.endShown){state.endShown=true;showEnd()}
}

/* ============================== END ============================== */
function showEnd(){
  $('#score').textContent=`${PINS.length} / ${PINS.length}`;$('#scoreTxt').textContent=T.scoreTxt;
  $('#endFuture').textContent=T.endFuture;
  $('#end').classList.add('show');
}
$('#again').onclick=()=>{
  state.visited.clear();state.endShown=false;
  Object.values(pinEls).forEach(e=>e.classList.remove('seen'));
  updateProgress();$('#end').classList.remove('show');$('#hint').style.opacity=1;
};


/* ============================== EXTRA BLOCKS ============================== */
let wmap=null;
function initMap(p){
  if(wmap){try{wmap.remove()}catch(e){}wmap=null}
  const el=document.getElementById('wmap');
  if(!el||typeof L==='undefined'){if(el)el.outerHTML='<p class="ldesc note">Map unavailable offline.</p>';return}
  wmap=L.map(el,{scrollWheelZoom:false}).setView([p.lat,p.lng],p.id==='delta'?7:6);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:12,attribution:'&copy; OpenStreetMap contributors'}).addTo(wmap);
  L.circleMarker([p.lat,p.lng],{radius:9,color:'#fff',weight:2,fillColor:p.color,fillOpacity:.9}).addTo(wmap).bindTooltip(p.title);
  if(!p.docOnly)initOverlay(p);
  setTimeout(()=>wmap&&wmap.invalidateSize(),350);
}
/* radar image on the web map. Scene size (km) and aspect are our estimates, not file metadata. */
const SCENE_KM={kamchatka:150,alaska:100,venezuela:100,mozambique:50,delta:250};
const SCENE_ASP={kamchatka:900/913,alaska:1100/840,venezuela:900/886,mozambique:1,delta:1300/1231};
function initOverlay(p){
  if(!p.ov){
    if(p.bounds)p.ov={c:[(p.bounds[0][0]+p.bounds[1][0])/2,(p.bounds[0][1]+p.bounds[1][1])/2],dLat:(p.bounds[1][0]-p.bounds[0][0])/2,dLng:(p.bounds[1][1]-p.bounds[0][1])/2};
    else{const w=SCENE_KM[p.id]||100,h=w/(SCENE_ASP[p.id]||1.3);p.ov={c:[p.lat,p.lng],dLat:h/111.32/2,dLng:w/(111.32*Math.cos(p.lat*Math.PI/180))/2}}
  }
  const bnds=()=>[[p.ov.c[0]-p.ov.dLat,p.ov.c[1]-p.ov.dLng],[p.ov.c[0]+p.ov.dLat,p.ov.c[1]+p.ov.dLng]];
  const layer=L.imageOverlay(p.afterImage,bnds(),{opacity:.7,interactive:false}).addTo(wmap);
  wmap.fitBounds(bnds(),{padding:[20,20],maxZoom:10});
  const redraw=()=>layer.setBounds(bnds());
  const mv=(dy,dx)=>{p.ov.c[0]+=dy*p.ov.dLat*.2;p.ov.c[1]+=dx*p.ov.dLng*.2;redraw()};
  const sc=f=>{p.ov.dLat*=f;p.ov.dLng*=f;redraw()};
  $('#ovon').onchange=e=>{e.target.checked?layer.addTo(wmap):wmap.removeLayer(layer)};
  $('#ovop').oninput=e=>layer.setOpacity(e.target.value/100);
  $('#ovl').onclick=()=>mv(0,-1);$('#ovr').onclick=()=>mv(0,1);$('#ovu').onclick=()=>mv(1,0);$('#ovd').onclick=()=>mv(-1,0);
  $('#ovm').onclick=()=>sc(.9);$('#ovp').onclick=()=>sc(1/.9);
  $('#ovc').onclick=()=>{const b=bnds().map(r=>r.map(v=>+v.toFixed(4)));const t=`bounds:[[${b[0]}],[${b[1]}]]`;
    (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>{$('#ovc').textContent='Copied'},()=>{prompt('Copy:',t)})};
}
/* compare overlay */
function showCompare(){
  $('#cmpbody').innerHTML=`<h3>Radar settings that reveal change</h3>
   <p class="sec">Polarizations</p><table class="tbl"><tr><th>Setting</th><th>What it is</th><th>Sees best</th><th>Used here</th></tr>${CMP.pol.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</table>
   <p class="sec">Frequencies (bands)</p><table class="tbl"><tr><th>Band</th><th>Wavelength</th><th>What it is good for</th></tr>${CMP.freq.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</table>
   <p class="sec">Example: why does a rainforest change?</p><p class="body">A healthy forest returns a strong HV echo from leaves and branches. When trees are cut or burned, HV drops, so HV is the best signal for forest loss, while HH changes more with water and trunks. Longer L-band waves go deeper into the canopy than C-band, so they keep seeing the forest where C-band saturates. This is a general radar principle, not a result from our five images.</p>
   <p class="ldesc note">Sources: NASA NISAR mission page (L-band 24 cm, S-band 9.4 cm, 12-day coverage, 4 mm per year); NASA SVS 5661 (HH, HV and ratio colors); NASA SVS 5675 (HH). Sentinel-1 wavelength is the standard C-band value.</p>`;
  $('#cmpov').classList.add('show');
}
$('#cmpbtn').onclick=showCompare;$('#cmpx').onclick=()=>$('#cmpov').classList.remove('show');
/* story mode */
const SS={i:0,t:null};
function storySteps(){return STORY.filter(s=>!s.personal||PERSONAL)}
function storyShow(){
  const st=storySteps(),s=st[SS.i];clearInterval(SS.t);
  $('#sn').textContent=`${SS.i+1} / ${st.length}`;$('#sh3').textContent=s.title;
  $('#stx').textContent=s.personal?PERSONAL:s.text;
  $('#sprev').disabled=SS.i===0;$('#snext').textContent=SS.i===st.length-1?'Finish':'Next';
  $('#panel').classList.remove('open');$('#cmpov').classList.remove('show');
  const p=s.pin&&PINS.find(x=>x.id===s.pin);
  $('.sx').style.display=p&&p.beforeImage?'':'none';
  if(p){
    setCat(p.cats[0]||null);
    globe.controls().autoRotate=false;globe.pointOfView({lat:p.lat,lng:p.lng,altitude:1.5},1200);
    if(p.beforeImage){$('#s1').src=p.beforeImage;$('#s2').src=p.afterImage}
    if(p.single||p.docOnly){$('#s2').style.opacity=0}else{let on=0;$('#s2').style.opacity=0;SS.t=setInterval(()=>{on^=1;$('#s2').style.opacity=on},1800)}
    state.visited.add(p.id);pinEls[p.id].classList.add('seen');updateProgress();
  }else{setCat(null);globe.pointOfView({altitude:2.4},1000)}
}
function storyStart(){SS.i=0;$('#story').classList.add('show');document.body.classList.add('story');storyShow()}
function storyExit(){clearInterval(SS.t);$('#story').classList.remove('show');document.body.classList.remove('story');if(!reduce)globe.controls().autoRotate=true;$('#cmpov').classList.remove('show')}
$('#stbtn').onclick=storyStart;$('#sexit').onclick=storyExit;
$('#sprev').onclick=()=>{if(SS.i>0){SS.i--;storyShow()}};
$('#snext').onclick=()=>{if(SS.i<storySteps().length-1){SS.i++;storyShow()}else storyExit()};

/* ============================== SLIDER + LAYERS ============================== */
function initSlider(p){
  if(p.single||p.docOnly)return;
  const c=$('#cmp');
  $('input',c).oninput=e=>c.style.setProperty('--p',e.target.value);
  document.querySelectorAll('.chip').forEach(ch=>ch.onclick=()=>{
    const i=+ch.dataset.l;
    document.querySelectorAll('.chip').forEach(x=>x.classList.toggle('on',x===ch));
    c.querySelectorAll('.aft img').forEach((im,k)=>im.classList.toggle('on',k===i));
    $('#ldesc').textContent=p.layers[i].description;
  });
}

/* ============================== TIMELINE ============================== */
function initTimeline(p){
  if(p.single||p.docOnly)return;
  const tl=$('#tl'),n=p.timeline.length-1;
  const update=()=>{
    const i=+tl.value,s=p.timeline[i];
    $('#tlafter').style.opacity=s.fade!==undefined?s.fade:i/n;
    const cp=s.changePercent;
    $('#arr').textContent=cp==null?'\u25CF':cp<0?'\u25BC':cp>0?'\u25B2':'\u25B6';
    $('#arr').style.color=TONE[s.tone];
    const b=$('#bdg');b.textContent=cp==null?(s.badge||''):(cp>0?'+':'')+cp+'%';b.style.background=TONE[s.tone];b.style.display=b.textContent?'inline-block':'none';
    $('#tlt').innerHTML=`<b>${s.label}</b> (${s.date})<br>${s.imageOrNote}`;
  };
  tl.oninput=update;update();
  $('#play').onclick=()=>{
    const btn=$('#play');
    if(state.timer){clearInterval(state.timer);state.timer=null;btn.innerHTML='&#9654;';return}
    if(+tl.value===n)tl.value=0;update();btn.innerHTML='&#10074;&#10074;';
    state.timer=setInterval(()=>{
      if(+tl.value>=n){clearInterval(state.timer);state.timer=null;btn.innerHTML='&#9654;';return}
      tl.value=+tl.value+1;update();
    },1100);
  };
}

/* ============================== REPORT ============================== */
function showReport(p){
  const dates=p.docOnly?'':p.single?p.beforeDate:`${p.beforeDate} → ${p.afterDate}`;
  const R=REP[p.id]||{};
  const first=t=>t.split('. ')[0].replace(/\.$/,'')+'.';
  const ch=!p.docOnly&&!p.single&&p.layers&&p.layers[1];
  const fig=(src,cap,date)=>`<figure><img style="aspect-ratio:${p.aspect||'8/5'}" src="${src}" alt="${cap}"><figcaption><b>${cap}</b>${date?`<span>${date}</span>`:''}</figcaption></figure>`;
  const imgs=p.docOnly?'':`<div class="pair${ch?'':' one'}">${fig(p.single?p.beforeImage:p.afterImage,p.single?'Radar':'After',p.single?p.beforeDate:p.afterDate)}${ch?fig(ch.image,ch.name.replace(/^Our /,'').replace(/^./,c=>c.toUpperCase()),'our analysis'):''}</div>`;
  const mx=R.stats?Math.max(...R.stats.map(x=>x[1])):0;
  const chart=R.stats?`<div class="chart"><div class="ct">What changed <span>${R.unit}</span></div>${R.stats.map(([l,v,c])=>`<div class="br"><span class="bl">${l}</span><span class="bt"><i style="width:${Math.max(3,v/mx*100)}%;background:${c}"></i></span><b>${v}</b></div>`).join('')}<p class="take">${R.take}</p></div>`:'';
  const radar=[p.radar.band,p.radar.pols.join(' / ')].filter(Boolean).join(' · ');
  $('#card').innerHTML=`<h3>${p.title}</h3>
   ${imgs}
   <dl class="facts">
    <dt>${T.reportWhat}</dt><dd>${R.what||first(p.whatHappened)}</dd>
    <dt>${T.reportWhy}</dt><dd>${R.why||first(p.whyItMatters)}</dd>
   </dl>
   ${chart}
   <div class="foot">${[radar,dates,p.credit||T.source].filter(Boolean).join(' • ')}</div>`;
  $('#rep').classList.add('show');
  const render=()=>html2canvas($('#card'),{backgroundColor:'#0d1422',scale:2,useCORS:true});
  $('#dl').onclick=()=>render().then(c=>{const a=document.createElement('a');a.download=`raqeeb-${p.id}.png`;a.href=c.toDataURL('image/png');a.click()});
  $('#sh').onclick=()=>render().then(c=>c.toBlob(async bl=>{
    const f=new File([bl],`raqeeb-${p.id}.png`,{type:'image/png'});
    if(navigator.canShare&&navigator.canShare({files:[f]}))try{await navigator.share({files:[f],title:p.title})}catch(e){}
    else $('#dl').click();
  }));
}
$('#sh').hidden=!navigator.share;
$('#rc').onclick=()=>$('#rep').classList.remove('show');
addEventListener('keydown',e=>{if(e.key==='Escape'){$('#rep').classList.remove('show');if($('#panel').classList.contains('open'))closePanel()}});

/* ============================== DASHBOARD + ABOUT ============================== */
/* Numbers come only from our own analyses (see each place's analysis box). null = not measured. */
const DASH=[
 {id:'kamchatka',name:'Kamchatka volcanoes',force:'Volcano',dates:'Jun 18 → Jun 30, 2026',band:'L-band preview',pol:'HH (NASA time-lapse)',m:'1.6% of usable land changed (0.5% brighter, 1.1% darker)',v:1.6,tone:'fire'},
 {id:'alaska',name:'Alaska earthquake',force:'Earthquake / glacier',dates:'Nov 26 → Dec 8, 2025',band:'L-band GSLC preview',pol:'not stated by source',m:'6% brighter, 0.3% darker (mostly steep slopes)',v:6.3,tone:'loss'},
 {id:'venezuela',name:'Venezuela earthquakes',force:'Earthquake',dates:'Jun 13/18 → Jun 25/30, 2026',band:'L-band preview',pol:'not stated by source',m:'About 1.8% changed in brightness. The ground moved up to ~60 cm in the radar phase (NASA).',v:1.8,tone:'loss'},
 {id:'mozambique',name:'Chókwè flood',force:'Flood',dates:'Jan 5 → Jan 17, 2026',band:'L-band GCOV, 10 m',pol:'HH',m:'About 199 km² of new open water (~8% of the scene), a minimum estimate',v:8,tone:'water'},
 {id:'mexico',name:'Mexico City',force:'Subsidence',dates:'Oct 25, 2025 \u2192 Jan 17, 2026',band:'L-band',pol:'not stated by source',m:'NASA: sinking up to a few cm per month. Not measured by us (documented case, no image).',v:null,tone:'loss'},
 {id:'antarctica',name:'East Antarctica nunatak',force:'Glacier / ice flow',dates:'Aug 2025 (1 image)',band:'L-band',pol:'horizontal transmit',m:'Crevasses visible in radar, not in optical. Documented case, no image.',v:null,tone:'water'},
 {id:'northdakota',name:'Forest River, North Dakota',force:'Farmland',dates:'Aug 23, 2025 (1 image)',band:'L-band',pol:'not stated by source',m:'Fallow vs cropland and center-pivot circles. Documented case, no image.',v:null,tone:'grow'},
 {id:'maine',name:'Mount Desert Island, Maine',force:'Forest baseline',dates:'Aug 21, 2025 (1 image)',band:'L-band',pol:'not stated by source',m:'Forest, water and built land separated. No forest loss shown. Documented case, no image.',v:null,tone:'grow'},
 {id:'delta',name:'Nile Delta',force:'Farmland / subsidence',dates:'1 image (date to add)',band:'L-band preview',pol:'not stated by source',m:'Not measured: needs a second date',v:null,tone:'grow'}];
function showDash(){
  $('#cmpbody').innerHTML=`<h3>Change at a glance</h3>
  <p class="ldesc">Our own measurements side by side. Bars show the share of the scene flagged as changed. Compare them only roughly: methods differ (brightness on 8-bit previews, calibrated HH in Mozambique).</p>
  ${DASH.map(d=>`<div style="margin:14px 0;cursor:pointer" data-p="${d.id}"><div class="fact" style="border:0;padding:0"><span><b>${d.name}</b> · ${d.force}</span><span class="ldesc">${d.dates}</span></div>
   <div style="height:10px;border-radius:6px;background:#111b2e;margin:6px 0"><div style="height:100%;width:${d.v==null?0:Math.min(100,d.v*8)}%;min-width:${d.v==null?0:4}px;border-radius:6px;background:${TONE[d.tone]}"></div></div>
   <div class="ldesc" style="font-size:13px">${d.m}<br><i>${d.band} · ${d.pol}</i></div></div>`).join('')}
  <p class="ldesc note">Click a row to open that place. Gaps are real: only Mozambique uses calibrated data, and Kamchatka's 17 dates are shown as a list because we do not have those images.</p>`;
  $('#cmpbody').querySelectorAll('[data-p]').forEach(r=>r.onclick=()=>{$('#cmpov').classList.remove('show');openPin(PINS.find(p=>p.id===r.dataset.p))});
  $('#cmpov').classList.add('show');
}
function showAbout(){
  $('#cmpbody').innerHTML=`<h3>About RAQEEB (رقيب)</h3>
  <p class="body">An open web app that explains how NISAR radar sees surface change: volcanoes, earthquakes, floods, glaciers, farmland and sinking land. Pick a force, open a place, drag the before/after slider and read the physical reason behind what the radar shows, including what it does <i>not</i> show.</p>
  <p class="sec">Data and credits</p>
  <p class="ldesc">Radar images: NISAR (NASA/ISRO) via the Alaska Satellite Facility and NASA Earth Observatory / SVS. Basemap: © OpenStreetMap contributors. Globe: globe.gl. Maps: Leaflet. Each place lists its own credit.</p>
  <p class="sec">How far to trust it</p>
  <p class="ldesc">Only Mozambique uses calibrated HH values (L2 GCOV). The other images are 8-bit previews, so our change maps there measure brightness only. Brighter or darker is never proof of a cause. Thresholds are our own choice and nothing was checked against field data.</p>
  <p class="sec">Open source</p>
  <p class="ldesc">MIT license. See README.md and analysis/compare_brightness.py in the project folder. To add a place, add one object to <code>PINS</code>.</p>`;
  $('#cmpov').classList.add('show');
}
$('#dashbtn').onclick=showDash;$('#aboutbtn').onclick=showAbout;

/* To add a place: add an object to PINS (title, lat, lng, images, dates, radar{band,pols,text}, future, credit). */
