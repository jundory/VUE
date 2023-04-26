<template>
  <div>
    <div id="map"></div>
    <!-- <div id="clickLatlng"></div> -->
    <div>클릭한 위치의 위도는 {{CoordFilter.latitude}} 이고, 경도는 {{CoordFilter.longitude}}입니다</div>
    <div class="test"></div>
    <!-- <div style="padding:5px;">Hello World!</div> -->
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { mapActions } from 'pinia';
import {useUserStore} from '@/stores/user'

export default {
  name: "KakaoMap", // 컴포넌트 이름 지정
  props: ['CoordData'],

  computed : {
    ...mapState(useUserStore,['getLatitude','getLongitude'])
  },

  mounted() {
    this.startMap()
  },

  data() {
    return {
      map : null,
      marker : null,

      CoordFilter: {
        latitude: '',
        longitude: ''
      },

      iwRemoveable: true
    };
  },

  methods: {
    ...mapActions(useUserStore,['setCoordinate']),
      startMap(){
        if (window.kakao && window.kakao.maps) {
          // 카카오 객체가 있고, 카카오 맵그릴 준비가 되어 있다면 맵 실행
          this.loadMap();

        } else {
          // 없다면 카카오 스크립트 추가 후 맵 실행
          this.loadScript();
        }
      },

      loadScript() {
        const script = document.createElement("script");
        // script.type = 'text/javascript'
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?appkey=7f0b9f0568e902dd59f13d66440926af&autoload=false"; // &autoload=false api를 로드한 후 맵을 그리는 함수가 실행되도록 구현
        script.onload = () => window.kakao.maps.load(this.loadMap); // 스크립트 로드가 끝나면 지도를 실행될 준비가 되어 있다면 지도가 실행되도록 구현

        document.head.appendChild(script); // html>head 안에 스크립트 소스를 추가
      },

      loadMap() {
        this.getLatitude ? this.CoordFilter.latitude = this.getLatitude : this.CoordFilter.latitude = '37.563518'
        this.getLongitude ? this.CoordFilter.longitude = this.getLongitude : this.CoordFilter.longitude = '126.839404'
        console.log("지도 위치는?", this.CoordFilter.latitude)

        const container = document.getElementById("map"); // 지도를 담을 DOM 영역
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(this.CoordFilter.latitude,this.CoordFilter.longitude), // 지도의 중심좌표
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        this.map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        this.createMarker()
      },

      createMarker() {
        this.marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: this.map.getCenter(),
          clickable: true
        });
        this.marker.setMap(this.map);

        window.kakao.maps.event.addListener(this.map, 'click', this.clickMap);

        window.kakao.maps.event.addListener(this.marker, 'click', this.clickMarker);
      },

      clickMap(mouseEvent) {          // 클릭한 위도, 경도 정보를 가져옵니다
        const latlng = mouseEvent.latLng;
        // 마커 위치를 클릭한 위치로 옮깁니다
        this.marker.setPosition(latlng);

        this.CoordFilter.latitude = latlng.getLat()
        this.CoordFilter.longitude = latlng.getLng()
        this.setCoordinate(this.CoordFilter.latitude.toFixed(4), this.CoordFilter.longitude.toFixed(4))
          console.log("클릭 좌표", latlng.getLat().toFixed(4),latlng.getLng().toFixed(4))
      },

      clickMarker(){
        // let iwContent = `위도 : ${ this.CoordFilter.latitude} 경도 : ${this.CoordFilter.longitude}` // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        const testTag = document.querySelector('.test')
        testTag.innerText = "클릭 시 해당 좌표 날씨 검색" // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        const infowindow = new window.kakao.maps.InfoWindow({
        content : testTag,
        removable : this.iwRemoveable
        });
        infowindow.open(this.map, this.marker);
       }
    }
  }
</script>

<style scoped>
#map {
  width: 50%;
  height: 500px;
}
</style>
