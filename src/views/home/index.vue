<template>
  <div class="home clearfix">
    <!-- 轮播 -->
    <div class="carousel">
      <!-- eslint-disable-next-line prettier/prettier -->
      <el-carousel :interval="4000" :autoplay="false" height="300px" type="card">
        <el-carousel-item v-for="(item, index) in 6" :key="index">
          <img src="../../assets/images/banner.jpg" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 歌单推荐 -->
    <div class="playlist clearfix">
      <div class="type-title clearfix">
        <div class="title">歌单推荐</div>
        <div class="more">
          <span>更多</span>
          <i class="iconfont icon-youjiantou-tianchong"></i>
        </div>
      </div>
      <div class="playlist-left fl">
        <div class="just_listen"></div>
        <div class="box">
          <div class="thumb">
            <img src="../../assets/images/img1.jpg" alt="" />
            <i class="iconfont icon-shipinbofang play"></i>
            <div class="playCnt">
              <i class="iconfont icon-headset"></i>
              <span>2155.33w</span>
            </div>
          </div>
          <div class="info">大牌新歌超强推荐</div>
        </div>
      </div>
      <div class="playlist-right fl">
        <div class="item-box" v-for="(item, index) in 10" :key="index">
          <div class="item-thumb">
            <img src="../../assets/images/img2.jpg" alt="" />
            <i class="iconfont icon-shipinbofang play"></i>
            <div class="playCnt">
              <i class="iconfont icon-headset"></i>
              <span>2155.33w</span>
            </div>
          </div>
          <div class="info">大牌新歌超强推荐</div>
        </div>
      </div>
    </div>
    <!-- 新歌速递 -->
    <div class="newsongs">
      <div class="container">
        <div class="container-left">
          <div v-for="(item, index) in 6" :key="index">
            <img src="../../assets/images/img3.jpg" alt="" />
          </div>
          <div class="play-all">全部播放</div>
        </div>
        <div class="container-right">
          <div class="item-nav">
            <span class="active">华语</span>
            <span>欧美</span>
            <span>日韩</span>
          </div>
          <div class="item-warp clearfix">
            <div class="item" v-for="(item, index) in 8" :key="index">
              <div class="img-box">
                <img src="../../assets/images/img3.jpg" alt="" />
                <i class="iconfont icon-shipinbofang play"></i>
              </div>
              <div class="info">
                <p class="title">收爱(电视剧《爱情的开关》插曲)</p>
                <p class="singer">树林座</p>
              </div>
              <div class="duration">03:12</div>
              <div class="action">
                <i class="iconfont icon-danseshixintubiao-"></i>
                <i class="iconfont icon-icon_zhuanfa"></i>
                <i class="iconfont icon-lingsheng"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 新碟上线 -->
    <div class="newthumb">
      <div class="type-title clearfix">
        <div class="title">新碟上线</div>
        <div class="more">
          <span>更多</span>
          <i class="iconfont icon-youjiantou-tianchong"></i>
        </div>
      </div>
      <div class="container clearfix">
        <div class="item" v-for="(item, index) in 10" :key="index">
          <div class="img-box">
            <div class="img">
              <img src="../../assets/images/img2.jpg" alt="" />
            </div>
            <i class="iconfont icon-shipinbofang play"></i>
          </div>
          <p>《三千鸦杀》电视原声</p>
          <p>群星</p>
        </div>
      </div>
    </div>
    <!-- 排行榜 -->
    <div class="rank">
      <div class="type-title clearfix">
        <div class="title">歌单推荐</div>
        <div class="more">
          <span>更多</span>
          <i class="iconfont icon-youjiantou-tianchong"></i>
        </div>
      </div>
      <div class="rank-box">
        <div class="container clearfix">
          <div class="rank-carousel fl">
            <!-- eslint-disable-next-line prettier/prettier -->
            <el-carousel height="213px" type="card" indicator-position="none" arrow="always" :autoplay="false">
              <el-carousel-item v-for="(item, index) in 6" :key="index">
                <img src="../../assets/images/img4.jpg" alt="" />
                <!-- <div class="mask"></div> -->
              </el-carousel-item>
            </el-carousel>
            <p class="title">音乐榜</p>
            <p class="time">每24小时更新</p>
            <div class="play_billboard">
              <i class="iconfont icon-bofang_huaban"></i>
              播放榜单
            </div>
          </div>
          <div class="rank-itembox fl">
            <div class="item" v-for="(item, index) in 30" :key="index">
              <span>01</span>
              <div class="img-box inline">
                <img src="../../assets/images/img4.jpg" alt="" />
                <i class="iconfont icon-shipinbofang play"></i>
              </div>
              <span class="title">冰天雪地 (电视剧《冰糖炖雪梨》主题曲)</span>
              <span class="singer">何宣林</span>
              <div class="action inline">
                <i class="iconfont icon-danseshixintubiao-"></i>
                <i class="iconfont icon-icon_zhuanfa"></i>
                <i class="iconfont icon-lingsheng"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 音乐人 -->
    <div class="musician">
      <div class="type-title clearfix">
        <div class="title">音乐人</div>
        <div class="more">
          <span>更多</span>
          <i class="iconfont icon-youjiantou-tianchong"></i>
        </div>
      </div>
      <div class="container clearfix">
        <div class="item" v-for="(item, index) in 10" :key="index">
          <div class="img-box">
            <div class="img">
              <img src="../../assets/images/img2.jpg" alt="" />
            </div>
            <i class="iconfont icon-shipinbofang play"></i>
          </div>
          <p>《三千鸦杀》电视原声</p>
          <p>群星</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less" scoped>
@import url("./index.less");
</style>
