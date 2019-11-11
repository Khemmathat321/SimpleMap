<template>
  <div>
    <GmapMap
      :center="viewCenter"
      :zoom="14"
      style="width: 100%; height: 600px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.geometry.location"
        :clickable="true"
        :draggable="true"
      />
    </GmapMap>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Map',
  data () {
    return {
      markers: {},
      viewCenter: {
        lat: 0.0,
        lng: 0.0
      }
    }
  },

  mounted () {
    Axios.get('http://localhost:3000/SCG?search=restaurants+in+Bangsue')
      .then(response => {
        this.markers = response.data.results
      })

    Axios.get('http://localhost:3000/SCG?search=Bangsue')
      .then(response => {
        this.viewCenter.lat = response.data.results[0].geometry.location.lat
        this.viewCenter.lng = response.data.results[0].geometry.location.lng
      })
  }
}
</script>
