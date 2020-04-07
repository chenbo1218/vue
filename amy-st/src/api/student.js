export function getMychild(obj) {
    return request.post("mini/findStudentList", obj);
}