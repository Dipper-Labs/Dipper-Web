<template>
  <div class="col-md-12 content-margin-top">
    <div class="row">
      <div class="timeline timeline-line-dotted">
        <div
          v-for="(item,index) in roadMap"
          :key="index"
          class="timeline-item"
          :class="{'timeline-text-algin':index%2 == 0}"
        >
          <div class="timeline-point">
            <i :class="{'active':item.active}"></i>
          </div>
          <div class="timeline-event">
            <div class="event-content animate-fadeInUp animated">
              <div class="timeline-heading animate-fadeInUp animated">
                <h4 :class="{'blue':item.active}">{{$t(('roadMap.'+item.name)).year}}</h4>
              </div>
              <div class="timeline-body animate-fadeInUp animated">
                <p>{{$t(('roadMap.'+item.name)).event}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    roadMap: {
      type: Array,
      required: true
    }
  }
};
</script>
<style  scoped>
@import "../../assets/style/timeline.css";
</style>

  

