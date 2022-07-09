<template>
  <div class="type-nav">
    <div class="container">
      <div class="nav-left" @click="Jump">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2">
            <div class="item" v-for="pr1 in ListData" :key="pr1.categoryId">
              <h3>
                <a
                  href="javascript:;"
                  :data-id="pr1.categoryId"
                  :data-name="pr1.categoryName"
                  data-lev="1"
                  >{{ pr1.categoryName }}</a
                >
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="pr2 in pr1.categoryChild"
                    :kye="pr2.categoryId"
                  >
                    <dt>
                      <a
                        href="javascript:;"
                        :data-id="pr2.categoryId"
                        :data-name="pr2.categoryName"
                        data-lev="2"
                        >{{ pr2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em v-for="pr3 in pr2.categoryChild">
                        <a
                          href="javascript:;"
                          :data-id="pr3.categoryId"
                          :data-name="pr3.categoryName"
                          data-lev="3"
                          >{{ pr3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  methods: {
    Jump(e) {
      if (!e.target.dataset.name) return;
      const { id, name, lev } = e.target.dataset;
      this.$router.push({
        name: "search",
        query: {
          categoryName: name,
          ["category" + lev + "Id"]: id,
        },
      });
    },
  },
  computed: {
    ...mapState(["CategoryList"]),
    ListData() {
      return this.CategoryList.slice(0, -2);
    },
  },
  mounted() {
    this.$store.dispatch("AsyncCategoryList");
  },
};
</script>
<style lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
