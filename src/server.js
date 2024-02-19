"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
if (process.env.NODE_ENV === "development")
    app.use((0, morgan_1.default)("dev"));
app.get("/api/healthchecker", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Build CRUD API with Node.js and Sequelize",
    });
});
app.all("*", (req, res) => {
    res.status(404).json({
        status: "fail",
        message: `Route: ${req.originalUrl} does not exist on this server`,
    });
});
const PORT = 8000;
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("🚀Server started Successfully");
}));
