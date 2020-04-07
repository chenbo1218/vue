export function login(obj) {
    // 登陆
    return request.post("web/login", obj);
}
export function sendSms(obj) {
    // 发送短信
    return request.post("mini/sendSms", obj);
}

export function editClientUser(obj) {
    // 编辑老师信息
    return request.post("mini/editClientUser", obj);
}

export function editTeacher(obj) {
    // 提交教师资料
    return request({
        url: "/mini/editTeacher",
        method: "post",
        data: obj
    });
}
export function findDict(obj) {
    return request({
        url: "/mini/findDict",
        method: "post",
        data: obj
    });
}
export function findDpTemplate() {
    return request({
        url: "/mini/findDpTemplate",
        method: "post"
    });
}

export function editOpinionBatch(obj) {
    // 点评
    return request({
        url: "/mini/editOpinionBatch",
        method: "post",
        data: obj
    });
}

export function findInsClass(obj) {
    // 获取老师班级
    return request({
        url: "/mini/findInsClass",
        method: "post",
        data: obj
    });
}

export function getInsStudentWithOpinion(obj) {
    // 班级学生
    return request({
        url: "/mini/getInsStudentWithOpinion",
        method: "post",
        data: obj
    });
}

export function findCourse(obj) {
    // 班级课程简介
    return request({
        url: "/mini/findCourse",
        method: "post",
        data: obj
    });
}

export function editNoticeBatch(obj) {
    // 发布通知
    return request({
        url: "/mini/editNoticeBatch",
        method: "post",
        data: obj
    });
}

export function findStudentScorePage(obj) {
    // 成绩报告
    return request({
        url: "/mini/findStudentScorePage",
        method: "post",
        data: obj
    });
}

export function findOpinionList(obj) {
    // 成绩报告详情
    return request({
        url: "/mini/findOpinionList",
        method: "post",
        data: obj
    });
}
