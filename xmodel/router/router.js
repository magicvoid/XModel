var express = require('express');
var router = express.Router();

const CONTROLLER_PATH = '../controller/ModelController.js';
const MODEL_SUFFIX = '.js';

// 配置路由与Controller方法的绑定
// 创建实体对象
router.post('/*/create', function(req, res) {
    // 从请求路径中获取Controller名称
    req.modelName = transJavaStyle(ucfirst(req.path.split('/')[1])) + MODEL_SUFFIX;
    // 动态加载对应名称的方法
    require(CONTROLLER_PATH).create(req, res);
});
// 更新实体对象
router.post('/*/update', function(req, res) {
    // 从请求路径中获取Controller名称
    req.modelName = transJavaStyle(ucfirst(req.path.split('/')[1])) + MODEL_SUFFIX;
    // 动态加载对应名称的方法
    require(CONTROLLER_PATH).update(req, res);
});
// 复杂查询实体对象
router.post('/*/query', function(req, res) {
    // 从请求路径中获取Controller名称
    req.modelName = transJavaStyle(ucfirst(req.path.split('/')[1])) + MODEL_SUFFIX;
    // 动态加载对应名称的方法
    require(CONTROLLER_PATH).query(req, res);
});
// 销毁实体对象
router.get('/*/destroy/:id', function(req, res) {
    // 从请求路径中获取Controller名称
    req.modelName = transJavaStyle(ucfirst(req.path.split('/')[1])) + MODEL_SUFFIX;
    // 动态加载对应名称的方法
    require(CONTROLLER_PATH).destroy(req, res);
});
// 获取实体对象
router.get('/*/get/:id', function(req, res) {
    // 从请求路径中获取Controller名称
    req.modelName = transJavaStyle(ucfirst(req.path.split('/')[1])) + MODEL_SUFFIX;
    // 动态加载对应名称的方法
    require(CONTROLLER_PATH).get(req, res);
});

function ucfirst(str) {
    str = str.toLowerCase();
    str = str.replace(/\b\w+\b/g, function(word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
    });
    return str;
}

function transJavaStyle(str) {
    var re = /_(\w)/g;
    return str.replace(re, function($0, $1) {
        return $1.toUpperCase();
    });
}

module.exports = router;
