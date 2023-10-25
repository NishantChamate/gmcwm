// /*import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";

// const Maps = () => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || "",
//   });
//   const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
//   const customMarker = {
//     path: "M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l-2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805",
//     fillColor: "red",
//     fillOpacity: 1,
//     strokeWeight: 1,
//     rotation: 45,
//     scale: 1,
//   };

//   const mapContainerStyle = {
//     height: "100%",
//     width: "100%",
//     border: "1px solid #ccc",
//     backgroundColor: "#f0f0f0",
//     position: "relative",
//   };

//   return (
//     <div className="App">
//       {!isLoaded ? (
//         <h1>Loading...</h1>
//       ) : (
//         <GoogleMap
//           mapContainerStyle={mapContainerStyle}
//           center={center}
//           zoom={10}
//         >
//           <Marker
//             position={{ lat: 18.52043, lng: 73.856743 }}
//             icon={customMarker}
//           />
//         </GoogleMap>
//       )}
//     </div>
//   );
// };

// export default Maps;
// */
import React, { useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { DirectionsRenderer } from "@react-google-maps/api";
import TitleCard from "../../../components/Cards/TitleCard.js";

const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || "",
  });

  const customMarker = {
    path: "M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l-2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805",
    fillColor: "red",
    fillOpacity: 1,
    strokeWeight: 1,
    rotation: 45,
    scale: 1,
  };

  const [directions, setDirections] = useState(null);

  const origin = useMemo(
    () => ({ lat: 19.093828562121928, lng: 72.85941687867708 }),
    []
  );
  const destination = useMemo(
    () => ({ lat: 20.39359234245785, lng: 72.83113626600223 }),
    []
  );

  const mapContainerStyle = {
    height: "85%",
    width: "97%",
    border: "1px solid #CCC",
    backgroundColor: "#f0f0f0",
    position: "absolute",
  };

  useEffect(() => {
    if (isLoaded) {
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: "DRIVING",
          drivingOptions: {
            departureTime: new Date("2023-10-15T15:01:23.045123456Z"),
            trafficModel: "bestguess",
          },
          provideRouteAlternatives: true, // Set to true if you want multiple route alternatives
        },
        (response, status) => {
          if (status === "OK") {
            setDirections(response);
          } else {
            console.error(`Directions request failed: ${status}`);
          }
        }
      );
    }
  }, [isLoaded, origin, destination]);

  return (
    <TitleCard title={"Google Maps"}>
      <div className="App">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={origin}
            zoom={10}
          >
            <Marker position={origin} icon={customMarker} />
            <Marker position={destination} />

            {directions && (
              <DirectionsRenderer
                directions={directions}
                options={{
                  suppressMarkers: true, // Don't show default markers for origin and destination
                }}
              />
            )}
          </GoogleMap>
        )}
      </div>
    </TitleCard>
  );
};

export default Maps;

// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Flex,
//   HStack,
//   IconButton,
//   Input,
//   SkeletonText,
//   Text,
// } from "@chakra-ui/react";
// import React, { useEffect, useMemo, useState } from "react";

// import { FaLocationArrow, FaTimes } from "react-icons/fa";

// import {
//   useLoadScript,
//   useJsApiLoader,
//   GoogleMap,
//   Marker,
//   Autocomplete,
//   DirectionsRenderer,
// } from "@react-google-maps/api";
// import { useRef } from "react";

// const center = { lat: 19.093828562121928, lng: 72.85941687867708 };

// function Maps() {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || "",
//     libraries: ["routes"],
//   });

//   const origin = useMemo(
//     () => ({ lat: 19.093828562121928, lng: 72.85941687867708 }),
//     []
//   );
//   const destination = useMemo(
//     () => ({ lat: 20.39359234245785, lng: 72.83113626600223 }),
//     []
//   );

//   const [map, setMap] = useState(/** @type google.maps.Map */ (null));
//   const [directionsResponse, setDirectionsResponse] = useState(null);
//   const [distance, setDistance] = useState("");
//   const [duration, setDuration] = useState("");

//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const originRef = useRef();
//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const destiantionRef = useRef();

//   if (!isLoaded) {
//     return <SkeletonText />;
//   }

//   async function calculateRoute() {
//     // eslint-disable-next-line no-undef
//     const directionsService = new google.maps.DirectionsService();
//     const results = await directionsService.route({
//       origin: origin,
//       destination: destination,
//       // eslint-disable-next-line no-undef
//       travelMode: google.maps.TravelMode.DRIVING,
//     });
//     setDirectionsResponse(results);
//     setDistance(results.routes[0].legs[0].distance.text);
//     setDuration(results.routes[0].legs[0].duration.text);
//   }

//   function clearRoute() {
//     setDirectionsResponse(null);
//     setDistance("");
//     setDuration("");
//     originRef.current.value = "";
//     destiantionRef.current.value = "";
//   }

//   return (
//     <Flex
//       position="relative"
//       flexDirection="column"
//       alignItems="center"
//       h="100vh"
//       w="100vw"
//     >
//       <Box position="absolute" left={0} top={0} h="100%" w="100%">
//         {/* Google Map Box */}
//         <GoogleMap
//           center={center}
//           zoom={15}
//           mapContainerStyle={{ width: "100%", height: "100%" }}
//           options={{
//             zoomControl: false,
//             streetViewControl: false,
//             mapTypeControl: false,
//             fullscreenControl: false,
//           }}
//           onLoad={(map) => setMap(map)}
//         >
//           <Marker position={center} />
//           {directionsResponse && (
//             <DirectionsRenderer directions={directionsResponse} />
//           )}
//         </GoogleMap>
//       </Box>
//     </Flex>
//   );
// }

// export default Maps;
