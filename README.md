# RAQEEB (رقيب) — NISAR surface-change explorer

An interactive globe that shows how NISAR radar sees change on Earth's surface, with the physical reason behind each case.
No build step: open `index.html` in a browser (internet needed for the globe, basemap and fonts).

## Places
| Place | Force | Dates | Our measurement |
|---|---|---|---|
| Kamchatka, Russia | Volcano | Jun 18 / Jun 30, 2026 | brightness change, 8-bit preview |
| St. Elias, Alaska | Earthquake, glacier | Nov 26 / Dec 8, 2025 | brightness change, 8-bit preview |
| Yaracuy, Venezuela | Earthquake | Jun 13-18 / Jun 25-30, 2026 | brightness change; ground motion cited from NASA |
| Chókwè, Mozambique | Flood | Jan 5 / Jan 17, 2026 | calibrated HH, ~199 km² new open water (minimum) |
| Nile Delta, Egypt | Farmland, subsidence | 1 image | none yet (needs a 2nd date) |
| Mexico City | Subsidence | Oct 25, 2025 - Jan 17, 2026 | documented NASA case, no image |
| East Antarctica nunatak | Glacier, crevasses | Aug 2025 | documented NASA case, no image |
| Forest River, North Dakota | Farmland | Aug 23, 2025 | documented NASA case, no image |
| Mount Desert Island, Maine | Forest baseline | Aug 21, 2025 | documented NASA case, no image |

## Features
Globe by force, before/after slider, our change maps, timeline, polarization/band comparison table, dashboard, story mode, shareable report card, web map.

## Challenge checklist
- Interactive app, several change types: yes (volcano, quake, flood, glacier, farmland/subsidence).
- Physical drivers and polarization discussion: yes (per place, plus "Compare radar").
- Human drivers: Nile Delta panel (farmland vs. cities, New Delta project).
- Time series: **partial** — two dates per place; Kamchatka lists 17 dates but only two images.
- Different polarizations / frequencies: **partial** — HH only in Mozambique; others unlabeled by their sources.
- Ancillary layers (population, land cover, optical): **not yet**.
- Forest baseline (Maine) and farmland (North Dakota) added as documented cases. Forest loss / fire, soil moisture, sea ice: **not yet** (no source found with a usable case).
- Personal story: set `PERSONAL` in `index.html`.

## Radar on the web map
Each place with an image shows it over OpenStreetMap with an opacity slider. **Placement is approximate** (scene size estimated, centered on the pin). Align it with the arrows, press Copy bounds, and paste `bounds:[[S,W],[N,E]]` into that place in `index.html`.

## Analysis scripts
- `analysis/compare_brightness.py before.jpg after.jpg` — brightness change with the global shift removed. Reference re-implementation: results land close to, but are not identical to, the numbers in the app.
- `analysis/flood_hh.py` — open-water rule used for Mozambique. Not run in the authoring session; verify the HDF5 path.

## Data
NISAR (NASA/ISRO) via Alaska Satellite Facility Vertex, NASA Earth Observatory and NASA SVS (5661, 5675). OpenStreetMap basemap, globe.gl, Leaflet. Free NISAR data: https://search.asf.alaska.edu

## Add a place
Add an object to `PINS` in `index.html` (title, lat, lng, images, dates, radar, future, credit) and its id to `PIN_CATS`.

License: MIT (see LICENSE).
