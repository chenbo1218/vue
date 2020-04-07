export function findClientNoticePage(obj) {
    // 通知列表
    return request({
        url: "/mini/findClientNoticePage",
        method: "post",
        data: obj
    });
}
