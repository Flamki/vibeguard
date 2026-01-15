<!-- ===================== VibeGuard README ===================== -->

<div align="center">

  <h1 style="font-size:42px; margin-bottom:8px;">🛡️ VibeGuard</h1>

  <p style="font-size:18px; max-width:720px;">
    A <strong>zero-config CLI safety net</strong> for developers shipping
    <strong>AI-generated code</strong> fast.
  </p>

  <p>
    <img alt="npm" src="https://img.shields.io/npm/v/@flamki/vibeguard?color=brightgreen">
    <img alt="license" src="https://img.shields.io/npm/l/@flamki/vibeguard">
    <img alt="node" src="https://img.shields.io/node/v/@flamki/vibeguard">
  </p>

</div>

<hr/>

<h2>🚀 Why VibeGuard?</h2>

<p>
AI helps you code faster — but it also:
</p>

<ul>
  <li>❌ invents APIs that don’t exist</li>
  <li>❌ forgets error handling</li>
  <li>❌ introduces subtle security bugs</li>
</ul>

<p>
<strong>VibeGuard catches these problems instantly</strong> using fast heuristics,
before your code reaches production.
</p>

<hr/>

<h2>✨ Features</h2>

<ul>
  <li>🔍 <strong>Hallucinated API Detection</strong><br/>
      Detects function calls that are used but never defined or imported.</li>

  <li>🔐 <strong>Insecure Token Storage Detection</strong><br/>
      Flags tokens stored in <code>localStorage</code> (real XSS risk).</li>

  <li>⚠️ <strong>Missing Error Handling in Async Code</strong><br/>
      Warns when <code>await</code> is used without <code>try/catch</code>.</li>

  <li>⚡ <strong>Instant Local Scans</strong><br/>
      No login, no cloud, no AI APIs.</li>

  <li>🧪 <strong>CI-Friendly</strong><br/>
      Proper exit codes for automation pipelines.</li>
</ul>

<hr/>

<h2>📦 Installation & Usage</h2>

<h3>▶ Run instantly (no install)</h3>

<pre><code>npx @flamki/vibeguard@latest scan .</code></pre>

<p><em>Works on Windows, macOS, and Linux.</em></p>

<h3>▶ Install globally (best experience)</h3>

<pre><code>npm install -g @flamki/vibeguard
vibeguard scan .</code></pre>

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
No heavy AST parsing.  
No overengineering.  
Just <strong>fast, practical checks</strong>.
</p>

<hr/>

<h2>🧩 Rules Implemented</h2>

<h3>1️⃣ Insecure Token Storage</h3>

<pre><code>localStorage.setItem("token", authToken)</code></pre>

<p>
Tokens stored in <code>localStorage</code> are vulnerable to XSS attacks.
</p>

<h3>2️⃣ Missing try/catch in async code</h3>

<pre><code>await fetch(url)</code></pre>

<p>
Without proper error handling, async code can crash production apps.
</p>

<h3>3️⃣ Hallucinated API Calls (WOW feature)</h3>

<pre><code>getUserByIdSafe()</code></pre>

<p>
AI frequently invents helper APIs.  
VibeGuard flags them instantly.
</p>

<hr/>

<h2>🧪 CI & Exit Codes</h2>

<ul>
  <li>✅ Exit code <strong>0</strong> — No issues found</li>
  <li>❌ Exit code <strong>1</strong> — Warnings detected</li>
</ul>

<h3>Example (GitHub Actions)</h3>

<pre><code>- name: Run VibeGuard
  run: npx @flamki/vibeguard@latest scan .</code></pre>

<hr/>

<h2>⚠️ Limitations</h2>

<ul>
  <li>Uses heuristics, not full static analysis</li>
  <li>Complements ESLint / TypeScript</li>
  <li>Optimized for speed and practicality</li>
</ul>

<hr/>

<h2>🎤 30-Second Demo Script</h2>

<blockquote>
  “I use AI to code faster, but AI sometimes lies.”
</blockquote>

<pre><code>npx @flamki/vibeguard@latest scan .</code></pre>

<blockquote>
  “VibeGuard caught a fake API and a real security bug before production.”
</blockquote>

<blockquote>
  “It’s a zero-config CLI, runs locally, and works in seconds.”
</blockquote>

<hr/>

<h2>🛠️ Tech Stack</h2>

<ul>
  <li>Node.js 18+</li>
  <li>TypeScript</li>
  <li>commander</li>
  <li>chalk</li>
  <li>glob</li>
</ul>

<hr/>

<h2>📄 License</h2>

<p>MIT — free to use, fork, and improve.</p>

<hr/>

<p align="center">
  <strong>VibeGuard is built for speed, clarity, and real developer pain.</strong><br/>
  Perfect for hackathons, side projects, and production pipelines.
</p>

<!-- ===================== END README ===================== -->
