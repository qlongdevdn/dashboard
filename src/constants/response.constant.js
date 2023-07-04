define('SUCCESS_CODE', 200);
define('ERROR_CODE', 400);
define('UNAUTHORIZED_CODE', 401);
define('FORBIDDEN_CODE', 403);
define('NOT_FOUND_CODE', 404);

function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
    });
}
