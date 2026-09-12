# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> un usuario puede crear una tarea y verla en la lista
- Location: tests/example.spec.ts:3:1

# Error details

```
Error: browserType.launch: Failed to launch the browser process.
Browser logs:

<launching> /root/.cache/ms-playwright/firefox-1543/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-6SLLlv -juggler-pipe -silent
<launched> pid=10914
[pid=10914][err] PuTTY X11 proxy: No authorisation provided
[pid=10914][err] Error: cannot open display: localhost:10.0
[pid=10914] <process did exit: exitCode=1, signal=null>
[pid=10914] starting temporary directories cleanup
Call log:
  - <launching> /root/.cache/ms-playwright/firefox-1543/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-6SLLlv -juggler-pipe -silent
  - <launched> pid=10914
  - [pid=10914][err] PuTTY X11 proxy: No authorisation provided
  - [pid=10914][err] Error: cannot open display: localhost:10.0
  - [pid=10914] <process did exit: exitCode=1, signal=null>
  - [pid=10914] starting temporary directories cleanup
  - [pid=10914] <gracefully close start>
  - [pid=10914] <kill>
  - [pid=10914] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=10914] finished temporary directories cleanup
  - [pid=10914] <gracefully close end>

```