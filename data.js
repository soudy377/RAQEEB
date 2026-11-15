const REP={
 kamchatka:{what:"Radar view of Kamchatka's volcanoes, Jun 18 vs Jun 30, 2026.",why:"Radar sees through cloud and ash, so scientists can watch remote volcanoes safely.",
  unit:'% of usable land',stats:[['Got brighter',0.5,'#ff9f1c'],['Got darker',1.1,'#2ec4ff']],take:'Only about 1.6% of the land changed clearly.'},
 alaska:{what:"An earthquake shook Alaska's mountains and left debris on a glacier.",why:"Radar helps map landslide and avalanche hazards in remote areas.",
  unit:'% of usable land',stats:[['Got brighter',6,'#ff9f1c'],['Got darker',0.3,'#2ec4ff']],take:'The brighter patches are mostly on steep slopes.'},
 venezuela:{what:"Two strong earthquakes hit northern Venezuela on Jun 24, 2026.",why:"When roads and phones are down, radar shows where the ground moved.",
  unit:'% of usable land',stats:[['Got brighter',1.6,'#ff9f1c'],['Got darker',0.2,'#2ec4ff']],take:'Brightness barely changed, yet the ground moved up to about 60 cm. That shows only in the radar phase.'},
 mozambique:{what:"A flood spread along the river near Chókwè, Mozambique.",why:"Radar sees water through clouds, so teams know where to help first.",
  unit:'km² of the 50 × 50 km scene',stats:[['New open water',199,'#2ec4ff'],['Already dark on both dates',52,'#5b6b8c']],take:'About 8% of the scene is new water. This is a minimum estimate.'}};
const AK={before:'assets/ak-before.jpg',after:'assets/ak-after.jpg'};
