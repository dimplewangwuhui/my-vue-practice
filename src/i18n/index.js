import Vue from 'vue'
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
const messages = {
    zh: {
        hello: '好好学习，天天向上！'
    },
    en: {
        hello: 'good good study, day day up!'
    }
};

const i18n = new VueI18n({
    locale: 'zh', // 语言标识
    messages
});

export default i18n
