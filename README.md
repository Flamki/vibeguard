<!-- ===================== VibeGuard README ===================== -->

<div align="center">

  <h1 style="font-size:44px; margin-bottom:6px;">🛡️ VibeGuard</h1>

  <p style="font-size:18px; max-width:760px; margin-top:4px;">
    A <strong>zero-config CLI safety net</strong> for developers shipping
    <strong>AI-generated code</strong> fast.
  </p>

  <p>
    <img src="https://img.shields.io/npm/v/@flamki/vibeguard?color=brightgreen&label=npm" />
    <img src="https://img.shields.io/npm/l/@flamki/vibeguard?label=license" />
    <img src="https://img.shields.io/node/v/@flamki/vibeguard?label=node" />
    <img src="https://github.com/flamki/vibeguard/actions/workflows/publish.yml/badge.svg" />
  </p>

</div>

<hr/>

<h2>🤔 Why VibeGuard?</h2>

<p>
AI helps you write code faster — but it often:
</p>

<ul>
  <li>❌ invents APIs that don’t exist</li>
  <li>❌ forgets error handling</li>
  <li>❌ introduces subtle security vulnerabilities</li>
</ul>

<p>
<strong>VibeGuard acts as a last-line safety check</strong> before your code
reaches production.
</p>

<hr/>

<h2>🎥 Demo (10 seconds)</h2>

<p align="center">
  <img 
    src="https://user-images.githubusercontent.com/placeholder/vibeguard-demo.gif"
    alt="VibeGuard CLI demo"
    width="820"
    style="border-radius:12px; border:1px solid #e5e7eb;"
  />
</p>

<p align="center">
  <em>Instant feedback. No setup. No cloud.</em>
</p>

<hr/>

<h2>✨ Features</h2>

<ul>
  <li>🧠 <strong>Hallucinated API Detection</strong><br/>
      Catches AI-invented function calls that are never defined or imported.</li>

  <li>🔐 <strong>Insecure Token Storage Detection</strong><br/>
      Flags tokens stored in <code>localStorage</code> (XSS-prone).</li>

  <li>⚠️ <strong>Missing Async Error Handling</strong><br/>
      Warns when <code>await</code> is used without <code>try/catch</code>.</li>

  <li>⚡ <strong>Blazing Fast</strong><br/>
      Runs locally in seconds with zero configuration.</li>

  <li>🧪 <strong>CI-Ready</strong><br/>
      Designed for automation with proper exit codes.</li>
</ul>

<hr/>

<h2>📦 Installation & Usage</h2>

<h3>▶ Run instantly (recommended)</h3>

<pre><code>npx @flamki/vibeguard@latest scan .</code></pre>

<p><em>Works on Windows, macOS, and Linux.</em></p>

<h3>▶ Install globally</h3>

<pre><code>npm install -g @flamki/vibeguard
vibeguard scan .</code></pre>

<hr/>

<h2>⚙️ Configuration (Optional)</h2>

<p>
VibeGuard works out of the box, but you can customize it using
<code>vibeguard.config.json</code>.
</p>

<pre><code>{
  "include": ["src/**/*.ts", "src/**/*.js"],
  "exclude": ["node_modules", "dist"],
  "rules": {
    "localStorageToken": true,
    "missingTryCatch": true,
    "hallucinatedApi": true
  }
}</code></pre>

<p>
If no config file is present, VibeGuard runs with safe defaults.
</p>

<hr/>

<h2>🧪 Example Output</h2>

<pre><code>🛡️  VibeGuard
-----------------------
AI code safety net

🛡️ VibeGuard Report

src/auth.ts
  ⚠️ Line 12  Token stored in localStorage. This is vulnerable to XSS.
  ⚠️ Line 28  Async operation without try/catch. This may crash in production.

src/api/user.ts
  ⚠️ Line 7   Possible hallucinated API: getUserByIdSafe() is used but never defined.

Summary: 3 warning(s)</code></pre>

<hr/>

<h2>🧠 How It Works</h2>

<pre><code>CLI command
   ↓
Read project files (.js, .ts, .jsx, .tsx)
   ↓
Run lightweight detection rules
   ↓
Collect warnings
   ↓
Pretty console report</code></pre>

<p>
No heavy AST parsing.<br/>
No overengineering.<br/>
Just <strong>fast, practical heuristics</strong>.
</p>

<hr/>

<h2>🧩 Rules Implemented</h2>

<ul>
  <li><strong>🔐 Insecure Token Storage</strong> — XSS-prone patterns</li>
  <li><strong>⚠️ Missing try/catch</strong> — unsafe async code</li>
  <li><strong>🧠 Hallucinated APIs</strong> — AI-invented functions</li>
</ul>

<hr/>

<h2>🧪 CI & Exit Codes</h2>

<ul>
  <li>✅ Exit code <strong>0</strong> — No issues found</li>
  <li>❌ Exit code <strong>1</strong> — Warnings detected</li>
</ul>

<pre><code>- name: Run VibeGuard
  run: npx @flamki/vibeguard@latest scan .</code></pre>

<hr/>

<h2>🤖 MCP Server (Agent-Ready Vision)</h2>

<p>
VibeGuard is designed to act as a <strong>safety firewall for AI agents</strong>
via the <strong>Model Context Protocol (MCP)</strong>.
</p>

<ul>
  <li>AI agents send generated code to VibeGuard</li>
  <li>VibeGuard scans and returns structured warnings</li>
  <li>Hallucinated APIs are blocked before execution</li>
</ul>

<p>
<strong>Pitch:</strong><br/>
<em>“VibeGuard sits between AI agents and production code.”</em>
</p>

<hr/>

<h2>🛠️ Tech Stack</h2>

<p>
Built with a minimal, reliable stack:
</p>

<ul>
  <li>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="18"/>
    <strong>Node.js</strong> (18+)
  </li>
  <li>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="18"/>
    <strong>TypeScript</strong>
  </li>
  <li>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="18"/>
    <strong>Commander</strong> (CLI)
  </li>
  <li>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" width="18"/>
    <strong>npm</strong>
  </li>
</ul>

<hr/>

<h2>🎤 30-Second Hackathon Demo Script</h2>

<blockquote>
  “I use AI to code faster — but AI sometimes lies.”
</blockquote>

<pre><code>npx @flamki/vibeguard@latest scan .</code></pre>

<blockquote>
  “VibeGuard caught a fake API and a real security bug before production.”
</blockquote>

<blockquote>
  “It’s zero-config, runs locally, and works in seconds.”
</blockquote>

<hr/>

<h2>📄 License</h2>

<p>MIT — free to use, fork, and improve.</p>

<hr/>

<p align="center">
  <strong>VibeGuard is built for real developers shipping fast with AI.</strong><br/>
  Clean • Practical • Judge-Ready
</p>

<!-- ===================== END README ===================== -->
