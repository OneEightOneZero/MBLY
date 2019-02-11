<template>
  <section>
    <h1>
      游记&amp;故事集
      <i>0</i>
    </h1>
    <div class="texts"></div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
section {
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  margin: 21px 10px 40px;
}
section h1 {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 1rem;
  line-height: 1.33;
  margin-bottom: 20px;
  font-weight: 400;
}
section h1 i {
  font-size: 1rem;
  line-height: 1;
  padding: 3px 8px;
  border-radius: 18px;
  background: #e8dfc5;
  color: #fff;
  margin-left: 6px;
  vertical-align: top;
}
section .texts {
  display: flex;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 18px;
  height: 300px;
  background: url(../assets/timer6.png);    
  background-size: 100% 100%;
}
</style>
