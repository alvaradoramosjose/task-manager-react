# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> un usuario puede crear una tarea y verla en la lista
- Location: tests/example.spec.ts:3:1

# Error details

```
Error: browserType.launch: 
╔══════════════════════════════════════════════════════╗
║ Host system is missing dependencies to run browsers. ║
║ Please install them with the following command:      ║
║                                                      ║
║     npx playwright install-deps                      ║
║                                                      ║
║ Alternatively, use apt:                              ║
║     apt-get install libgtk-4-1\                      ║
║         libicu74\                                    ║
║         libatomic1\                                  ║
║         libgstreamer-plugins-bad1.0-0\               ║
║         libflite1\                                   ║
║         libavif16\                                   ║
║         libharfbuzz-icu0\                            ║
║         libjpeg-turbo8\                              ║
║         libwayland-server0\                          ║
║         libmanette-0.2-0\                            ║
║         libenchant-2-2\                              ║
║         libhyphen0\                                  ║
║         libsecret-1-0\                               ║
║         gstreamer1.0-libav                           ║
║                                                      ║
║ <3 Playwright Team                                   ║
╚══════════════════════════════════════════════════════╝
```