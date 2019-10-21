// filters.js
import Vue from "vue";
import Moment from "moment";

Vue.filter("shortDate", function(value){
    return Moment(value).format("L");
});

Vue.filter("date", function (value, formatType = "long") {
    if (formatType === "short") {
        return Moment(value).format("L");
    } else if (formatType === "long") {
        return Moment(value).format("LL");
    } else {
        return "Bad Date Format";
    }
});

Vue.filter("count", function(value) {
    return value.length;
});