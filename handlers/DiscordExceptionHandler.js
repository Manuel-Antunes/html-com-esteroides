import axios from "axios";

class DiscordExceptionHandler {
  async capture(context, error) {
    try {
      const body = {
        username: "Application Exception",
        content: "**Application Exception**",
        embeds: [
          {
            title: "**Application Exception**",
            color: 16711680,
            fields: [
              {
                name: "📨 Message",
                value: error.message,
              },
              {
                name: "🧪 Context",
                value: context,
              },
              {
                name: "❌ Error",
                value: `\`\`\`\n${
                  error.stack.length > 1000
                    ? `${error.stack.slice(0, 1000)}...`
                    : error.stack
                }\n\`\`\`\n`,
              },
            ],
          },
        ],
      };
      await axios.post(
        process.env.DISCORD_EXCEPTION_WEBHOOK,
        body
      );
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
}

export default new DiscordExceptionHandler();
