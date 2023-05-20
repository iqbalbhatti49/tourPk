import React, { useState } from 'react'
import MapPicker from 'react-google-map-picker'
import { useRef, useEffect } from 'react';

function LocationPicker(props) {
   const ref = useRef();
   const { onClose } = props;
   const DefaultLocation = {
      lat: 31.5204,
      lng: 74.3587
   };
   const DefaultZoom = 10;
   useEffect(() => {
      function handleClickOutside(event) {
         if (ref.current && !ref.current.contains(event.target)) {
            onClose();
         }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [ref, onClose]);

   const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
   const [location, setLocation] = useState(defaultLocation);
   const [zoom, setZoom] = useState(DefaultZoom);

   function handleChangeLocation(lat, lng) {
      setLocation({ lat: lat, lng: lng });
   }

   function handleChangeZoom(newZoom) {
      setZoom(newZoom);
   }

   return (
      <div ref={ref}>
         <MapPicker defaultLocation={defaultLocation}
            zoom={zoom}
            mapTypeId="roadmap"
            style={{ height: '450px' }}
            onChangeLocation={handleChangeLocation}
            onChangeZoom={handleChangeZoom}
            apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8' />
      </div>
   );
}

export default LocationPicker
