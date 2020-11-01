<template>
  <div class="hero">
    <div class="hero__overlayImage">
      <img
        src="https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg"
        alt=""
      />
    </div>
    <div class="info">
      <h1>JOKER</h1>
      <p>
        Joker, başarısız bir komedyen olan Arthur Fleck'in hayatına odaklanıyor.
      </p>
      <div class="buttons">
        <button class="play_button">
          <md-icon class="play__icon">play_arrow</md-icon>
          Oynat
        </button>
        <button class="moreInfo_button">
          <md-icon class="info__icon">info</md-icon>
          Daha Fazla Bilgi
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style>
.hero {
  position: relative;
  z-index: 8;
  margin-top: -68px;
}

.hero__overlayImage {
  position: relative;
}

.hero__overlayImage::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    transparent,
    transparent,
    transparent,
    #141414 90%
  );
}

.info {
  position: absolute;
  top: 35%;
  left: 5%;
  width: 30%;
}

.info h1 {
  font-size: 48px;
  margin-bottom: 30px;
  color: #fff;
}

.info p {
  font-size: 22px;
  color: #fff;
  font-weight: 100;
  line-height: 35px;
}

.buttons {
  margin-top: 15px;
  display: flex;
}

.buttons button {
  padding: 10px 25px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
}

.buttons .play_button {
  margin-right: 10px;
}

.buttons .play_button .play__icon {
  font-size: 28px !important;
  color: #000 !important;
  margin-right: 10px;
}

.buttons .moreInfo_button {
  background: #6d6d6eb3;
  color: #fff;
}

.buttons .moreInfo_button .info__icon {
  margin-right: 10px;
  color: #fff !important;
  font-size: 28px !important;
}
</style>
