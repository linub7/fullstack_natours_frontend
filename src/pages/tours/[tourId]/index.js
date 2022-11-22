import CommonLayout from 'components/shared/CommonLayout';
import Cta from 'components/tours-components/single-tour/cta/Cta';
import SingleTourDescription from 'components/tours-components/single-tour/description/SingleTourDescription';
import SingleTourPictures from 'components/tours-components/single-tour/pictures/SingleTourPictures';
import SingleTourReviews from 'components/tours-components/single-tour/reviews/SingleTourReviews';
import SingleTourHeader from 'components/tours-components/single-tour/header/SingleTourHeader';

const SingleTour = () => {
  return (
    <CommonLayout>
      <SingleTourHeader
        tourName={'The Park Camper Tour'}
        days={'10 days'}
        location={'Las Vegas, USA'}
      />

      <SingleTourDescription />

      <SingleTourPictures />

      {/* <section class="section-pictures">
        <div class="picture-box">
          <img
            class="picture-box__img picture-box__img--1"
            src="img/tour-5-1.jpg"
            alt="The Park Camper Tour 1"
          />
        </div>
        <div class="picture-box">
          <img
            class="picture-box__img picture-box__img--2"
            src="img/tour-5-2.jpg"
            alt="The Park Camper Tour 1"
          />
        </div>
        <div class="picture-box">
          <img
            class="picture-box__img picture-box__img--3"
            src="img/tour-5-3.jpg"
            alt="The Park Camper Tour 1"
          />
        </div>
      </section> */}

      {/* <section class="section-map">
      <div id="map"></div>
      <script>
        mapboxgl.accessToken =
          'pk.eyJ1Ijoiam9uYXNzY2htZWR0bWFubiIsImEiOiJjam54ZmM5N3gwNjAzM3dtZDNxYTVlMnd2In0.ytpI7V7w7cyT1Kq5rT9Z1A';

        const geojson = {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-112.987418, 37.198125]
              },
              properties: {
                description: 'Zion Canyon National Park'
              }
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-111.376161, 36.86438]
              },
              properties: {
                description: 'Antelope Canyon'
              }
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-112.115763, 36.058973]
              },
              properties: {
                description: 'Grand Canyon National Park'
              }
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-116.107963, 34.011646]
              },
              properties: {
                description: 'Joshua Tree National Park'
              }
            }
          ]
        };

        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/jonasschmedtmann/cjnxfn3zk7bj52rpegdltx58h',
          scrollZoom: false
        });

        const bounds = new mapboxgl.LngLatBounds();

        geojson.features.forEach(function(marker) {
          var el = document.createElement('div');
          el.className = 'marker';

          new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
          })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);

          new mapboxgl.Popup({
            offset: 30,
            closeOnClick: false
          })
            .setLngLat(marker.geometry.coordinates)
            .setHTML('<p>' + marker.properties.description + '</p>')
            .addTo(map);

          bounds.extend(marker.geometry.coordinates);
        });

        map.fitBounds(bounds, {
          padding: {
            top: 200,
            bottom: 150,
            left: 50,
            right: 50
          }
        });

        map.on('load', function() {
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: [
                    [-112.987418, 37.198125],
                    [-111.376161, 36.86438],
                    [-112.115763, 36.058973],
                    [-116.107963, 34.011646]
                  ]
                }
              }
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#55c57a',
              'line-opacity': 0.6,
              'line-width': 3
            }
          });
        });
      </script>
    </section> */}
      <SingleTourReviews
        reviewBy={'Jim Brown'}
        reviewContent={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dignissimos sint quo commodi corrupti accusantium veniam saepe numquam.'
        }
      />

      {/* <section class="section-cta">
        <div class="cta">
          <div class="cta__img cta__img--logo">
            <img src="img/logo-white.png" alt="Natours logo" class="" />
          </div>
          <img src="img/tour-5-2.jpg" alt="" class="cta__img cta__img--1" />
          <img src="img/tour-5-1.jpg" alt="" class="cta__img cta__img--2" />

          <div class="cta__content">
            <h2 class="heading-secondary">What are you waiting for?</h2>
            <p class="cta__text">
              10 days. 1 adventure. Infinite memories. Make it yours today!
            </p>
            <button class="btn btn--green span-all-rows">Book tour now!</button>
          </div>
        </div>
      </section> */}

      <Cta />
    </CommonLayout>
  );
};

export default SingleTour;
