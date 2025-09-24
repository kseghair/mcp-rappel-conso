import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { McpModule, McpTransportType } from "@rekog/mcp-nest";
import { RappelConsoTool } from "./rappelconso.tool";

@Module({
  imports: [
    HttpModule,
    McpModule.forRoot({
      name: "my-mcp-server",
      version: "1.0.0",
      transport: McpTransportType.STREAMABLE_HTTP,
      streamableHttp: {
        enableJsonResponse: true,
        sessionIdGenerator: undefined,
        statelessMode: true, // No session management
      },
    }),
  ],
  controllers: [],
  providers: [RappelConsoTool],
})
export class AppModule {}
