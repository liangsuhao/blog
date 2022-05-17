"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const http_exception_filter_1 = require("./http-exception.filter");
const port = process.env.PORT || 3004;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'app/dist'), {
        prefix: '/',
    });
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public/upload'), {
        prefix: '/upload',
    });
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map