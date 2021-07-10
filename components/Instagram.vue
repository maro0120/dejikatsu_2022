<template>
  <div>
    <div class="text-center m-10 border-b-2 pb-3">
      <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold font-title" id="info">Instagram</h3>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-center content-center text-center mt-8 bg-white">
  		<div class="snapwidget-bg">
  			<!-- SnapWidget -->
  			<!-- <iframe src="https://snapwidget.com/embed/940982" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:765px; height:255px"></iframe> -->
        <iframe src="https://snapwidget.com/embed/948822" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:765px; height:255px"></iframe>
  		</div>
  		<div class="snapwidget-sm">
  			<!-- SnapWidget -->
  			<script src="https://snapwidget.com/js/snapwidget.js"></script>
  			<iframe src="https://snapwidget.com/embed/948822" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:100%; "></iframe>
  		</div>
		</div>
  </div>
</template>

<style>
  @media screen and (max-width: 764px) {
    .snapwidget-sm {
      display: block;
    }
    
    .snapwidget-bg {
      display: none;
    }
  }
  
  @media screen and (min-width: 765px) {
    .snapwidget-bg {
      display: block;
    }
    
    .snapwidget-sm {
      display: none;
    }
  }
</style>

<script>

</script>

