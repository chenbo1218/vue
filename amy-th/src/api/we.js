export function findStudentByTeacher(obj) {
    // 获取评价过学生列表
    return request({
        url: "/mini/findStudentByTeacher",
        method: "post",
        data: obj
    });
}

export function findOpinionList(obj) {
    // 获取评价过学生点评详情
    return request({
        url: "/mini/findOpinionList",
        method: "post",
        data: obj
    });
}

export function findStudentByTeacherEx(obj) {
    // 学员名单
    return request({
        url: "/mini/findStudentByTeacherEx",
        method: "post",
        data: obj
    });
}
