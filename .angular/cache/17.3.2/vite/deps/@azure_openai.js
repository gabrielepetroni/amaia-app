import {
  __async,
  __asyncGenerator,
  __asyncValues,
  __await,
  __rest
} from "./chunk-TOGHQJOS.js";

// node_modules/@azure/core-auth/dist/browser/azureKeyCredential.js
var AzureKeyCredential = class {
  /**
   * The value of the key to be used in authentication
   */
  get key() {
    return this._key;
  }
  /**
   * Create an instance of an AzureKeyCredential for use
   * with a service client.
   *
   * @param key - The initial value of the key to use in authentication
   */
  constructor(key) {
    if (!key) {
      throw new Error("key must be a non-empty string");
    }
    this._key = key;
  }
  /**
   * Change the value of the key.
   *
   * Updates will take effect upon the next request after
   * updating the key value.
   *
   * @param newKey - The new key value to be used
   */
  update(newKey) {
    this._key = newKey;
  }
};

// node_modules/@azure/abort-controller/dist/browser/AbortError.js
var AbortError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "AbortError";
  }
};

// node_modules/@azure/core-util/dist/browser/random.js
function getRandomIntegerInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const offset = Math.floor(Math.random() * (max - min + 1));
  return offset + min;
}

// node_modules/@azure/core-util/dist/browser/object.js
function isObject(input) {
  return typeof input === "object" && input !== null && !Array.isArray(input) && !(input instanceof RegExp) && !(input instanceof Date);
}

// node_modules/@azure/core-util/dist/browser/error.js
function isError(e) {
  if (isObject(e)) {
    const hasName = typeof e.name === "string";
    const hasMessage = typeof e.message === "string";
    return hasName && hasMessage;
  }
  return false;
}
function getErrorMessage(e) {
  if (isError(e)) {
    return e.message;
  } else {
    let stringified;
    try {
      if (typeof e === "object" && e) {
        stringified = JSON.stringify(e);
      } else {
        stringified = String(e);
      }
    } catch (err) {
      stringified = "[unable to stringify input]";
    }
    return `Unknown error ${stringified}`;
  }
}

// node_modules/@azure/core-util/dist/browser/bytesEncoding.js
function stringToUint8Array(value, format) {
  switch (format) {
    case "utf-8":
      return utf8StringToUint8Array(value);
    case "base64":
      return base64ToUint8Array(value);
    case "base64url":
      return base64UrlToUint8Array(value);
    case "hex":
      return hexStringToUint8Array(value);
  }
}
function utf8StringToUint8Array(value) {
  return new TextEncoder().encode(value);
}
function base64ToUint8Array(value) {
  return new Uint8Array([...atob(value)].map((x) => x.charCodeAt(0)));
}
function base64UrlToUint8Array(value) {
  const base64String = value.replace(/-/g, "+").replace(/_/g, "/");
  return base64ToUint8Array(base64String);
}
var hexDigits = new Set("0123456789abcdefABCDEF");
function hexStringToUint8Array(value) {
  const bytes = new Uint8Array(value.length / 2);
  for (let i = 0; i < value.length / 2; ++i) {
    const highNibble = value[2 * i];
    const lowNibble = value[2 * i + 1];
    if (!hexDigits.has(highNibble) || !hexDigits.has(lowNibble)) {
      return bytes.slice(0, i);
    }
    bytes[i] = parseInt(`${highNibble}${lowNibble}`, 16);
  }
  return bytes;
}

// node_modules/@azure/core-util/dist/browser/uuidUtils.common.js
function generateUUID() {
  let uuid = "";
  for (let i = 0; i < 32; i++) {
    const randomNumber = Math.floor(Math.random() * 16);
    if (i === 12) {
      uuid += "4";
    } else if (i === 16) {
      uuid += randomNumber & 3 | 8;
    } else {
      uuid += randomNumber.toString(16);
    }
    if (i === 7 || i === 11 || i === 15 || i === 19) {
      uuid += "-";
    }
  }
  return uuid;
}

// node_modules/@azure/core-util/dist/browser/uuidUtils.js
var _a;
var uuidFunction = typeof ((_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.crypto) === null || _a === void 0 ? void 0 : _a.randomUUID) === "function" ? globalThis.crypto.randomUUID.bind(globalThis.crypto) : generateUUID;
function randomUUID() {
  return uuidFunction();
}

// node_modules/@azure/core-util/dist/browser/checkEnvironment.js
var _a2;
var _b;
var _c;
var _d;
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
var isWebWorker = typeof self === "object" && typeof (self === null || self === void 0 ? void 0 : self.importScripts) === "function" && (((_a2 = self.constructor) === null || _a2 === void 0 ? void 0 : _a2.name) === "DedicatedWorkerGlobalScope" || ((_b = self.constructor) === null || _b === void 0 ? void 0 : _b.name) === "ServiceWorkerGlobalScope" || ((_c = self.constructor) === null || _c === void 0 ? void 0 : _c.name) === "SharedWorkerGlobalScope");
var isDeno = typeof Deno !== "undefined" && typeof Deno.version !== "undefined" && typeof Deno.version.deno !== "undefined";
var isBun = typeof Bun !== "undefined" && typeof Bun.version !== "undefined";
var isNodeLike = typeof globalThis.process !== "undefined" && Boolean(globalThis.process.version) && Boolean((_d = globalThis.process.versions) === null || _d === void 0 ? void 0 : _d.node);
var isNode = isNodeLike;
var isReactNative = typeof navigator !== "undefined" && (navigator === null || navigator === void 0 ? void 0 : navigator.product) === "ReactNative";

// node_modules/@azure/core-auth/dist/browser/tokenCredential.js
function isTokenCredential(credential) {
  const castCredential = credential;
  return castCredential && typeof castCredential.getToken === "function" && (castCredential.signRequest === void 0 || castCredential.getToken.length > 0);
}

// node_modules/@azure/core-rest-pipeline/dist/browser/pipeline.js
var ValidPhaseNames = /* @__PURE__ */ new Set(["Deserialize", "Serialize", "Retry", "Sign"]);
var HttpPipeline = class _HttpPipeline {
  constructor(policies) {
    var _a3;
    this._policies = [];
    this._policies = (_a3 = policies === null || policies === void 0 ? void 0 : policies.slice(0)) !== null && _a3 !== void 0 ? _a3 : [];
    this._orderedPolicies = void 0;
  }
  addPolicy(policy, options = {}) {
    if (options.phase && options.afterPhase) {
      throw new Error("Policies inside a phase cannot specify afterPhase.");
    }
    if (options.phase && !ValidPhaseNames.has(options.phase)) {
      throw new Error(`Invalid phase name: ${options.phase}`);
    }
    if (options.afterPhase && !ValidPhaseNames.has(options.afterPhase)) {
      throw new Error(`Invalid afterPhase name: ${options.afterPhase}`);
    }
    this._policies.push({
      policy,
      options
    });
    this._orderedPolicies = void 0;
  }
  removePolicy(options) {
    const removedPolicies = [];
    this._policies = this._policies.filter((policyDescriptor) => {
      if (options.name && policyDescriptor.policy.name === options.name || options.phase && policyDescriptor.options.phase === options.phase) {
        removedPolicies.push(policyDescriptor.policy);
        return false;
      } else {
        return true;
      }
    });
    this._orderedPolicies = void 0;
    return removedPolicies;
  }
  sendRequest(httpClient, request) {
    const policies = this.getOrderedPolicies();
    const pipeline = policies.reduceRight((next, policy) => {
      return (req) => {
        return policy.sendRequest(req, next);
      };
    }, (req) => httpClient.sendRequest(req));
    return pipeline(request);
  }
  getOrderedPolicies() {
    if (!this._orderedPolicies) {
      this._orderedPolicies = this.orderPolicies();
    }
    return this._orderedPolicies;
  }
  clone() {
    return new _HttpPipeline(this._policies);
  }
  static create() {
    return new _HttpPipeline();
  }
  orderPolicies() {
    const result = [];
    const policyMap = /* @__PURE__ */ new Map();
    function createPhase(name) {
      return {
        name,
        policies: /* @__PURE__ */ new Set(),
        hasRun: false,
        hasAfterPolicies: false
      };
    }
    const serializePhase = createPhase("Serialize");
    const noPhase = createPhase("None");
    const deserializePhase = createPhase("Deserialize");
    const retryPhase = createPhase("Retry");
    const signPhase = createPhase("Sign");
    const orderedPhases = [serializePhase, noPhase, deserializePhase, retryPhase, signPhase];
    function getPhase(phase) {
      if (phase === "Retry") {
        return retryPhase;
      } else if (phase === "Serialize") {
        return serializePhase;
      } else if (phase === "Deserialize") {
        return deserializePhase;
      } else if (phase === "Sign") {
        return signPhase;
      } else {
        return noPhase;
      }
    }
    for (const descriptor of this._policies) {
      const policy = descriptor.policy;
      const options = descriptor.options;
      const policyName = policy.name;
      if (policyMap.has(policyName)) {
        throw new Error("Duplicate policy names not allowed in pipeline");
      }
      const node = {
        policy,
        dependsOn: /* @__PURE__ */ new Set(),
        dependants: /* @__PURE__ */ new Set()
      };
      if (options.afterPhase) {
        node.afterPhase = getPhase(options.afterPhase);
        node.afterPhase.hasAfterPolicies = true;
      }
      policyMap.set(policyName, node);
      const phase = getPhase(options.phase);
      phase.policies.add(node);
    }
    for (const descriptor of this._policies) {
      const { policy, options } = descriptor;
      const policyName = policy.name;
      const node = policyMap.get(policyName);
      if (!node) {
        throw new Error(`Missing node for policy ${policyName}`);
      }
      if (options.afterPolicies) {
        for (const afterPolicyName of options.afterPolicies) {
          const afterNode = policyMap.get(afterPolicyName);
          if (afterNode) {
            node.dependsOn.add(afterNode);
            afterNode.dependants.add(node);
          }
        }
      }
      if (options.beforePolicies) {
        for (const beforePolicyName of options.beforePolicies) {
          const beforeNode = policyMap.get(beforePolicyName);
          if (beforeNode) {
            beforeNode.dependsOn.add(node);
            node.dependants.add(beforeNode);
          }
        }
      }
    }
    function walkPhase(phase) {
      phase.hasRun = true;
      for (const node of phase.policies) {
        if (node.afterPhase && (!node.afterPhase.hasRun || node.afterPhase.policies.size)) {
          continue;
        }
        if (node.dependsOn.size === 0) {
          result.push(node.policy);
          for (const dependant of node.dependants) {
            dependant.dependsOn.delete(node);
          }
          policyMap.delete(node.policy.name);
          phase.policies.delete(node);
        }
      }
    }
    function walkPhases() {
      for (const phase of orderedPhases) {
        walkPhase(phase);
        if (phase.policies.size > 0 && phase !== noPhase) {
          if (!noPhase.hasRun) {
            walkPhase(noPhase);
          }
          return;
        }
        if (phase.hasAfterPolicies) {
          walkPhase(noPhase);
        }
      }
    }
    let iteration = 0;
    while (policyMap.size > 0) {
      iteration++;
      const initialResultLength = result.length;
      walkPhases();
      if (result.length <= initialResultLength && iteration > 1) {
        throw new Error("Cannot satisfy policy dependencies due to requirements cycle.");
      }
    }
    return result;
  }
};
function createEmptyPipeline() {
  return HttpPipeline.create();
}

// node_modules/@azure/logger/dist/browser/log.js
function log(...args) {
  if (args.length > 0) {
    const firstArg = String(args[0]);
    if (firstArg.includes(":error")) {
      console.error(...args);
    } else if (firstArg.includes(":warning")) {
      console.warn(...args);
    } else if (firstArg.includes(":info")) {
      console.info(...args);
    } else if (firstArg.includes(":verbose")) {
      console.debug(...args);
    } else {
      console.debug(...args);
    }
  }
}

// node_modules/@azure/logger/dist/browser/debug.js
var debugEnvVariable = typeof process !== "undefined" && process.env && process.env.DEBUG || void 0;
var enabledString;
var enabledNamespaces = [];
var skippedNamespaces = [];
var debuggers = [];
if (debugEnvVariable) {
  enable(debugEnvVariable);
}
var debugObj = Object.assign((namespace) => {
  return createDebugger(namespace);
}, {
  enable,
  enabled,
  disable,
  log
});
function enable(namespaces) {
  enabledString = namespaces;
  enabledNamespaces = [];
  skippedNamespaces = [];
  const wildcard = /\*/g;
  const namespaceList = namespaces.split(",").map((ns) => ns.trim().replace(wildcard, ".*?"));
  for (const ns of namespaceList) {
    if (ns.startsWith("-")) {
      skippedNamespaces.push(new RegExp(`^${ns.substr(1)}$`));
    } else {
      enabledNamespaces.push(new RegExp(`^${ns}$`));
    }
  }
  for (const instance of debuggers) {
    instance.enabled = enabled(instance.namespace);
  }
}
function enabled(namespace) {
  if (namespace.endsWith("*")) {
    return true;
  }
  for (const skipped of skippedNamespaces) {
    if (skipped.test(namespace)) {
      return false;
    }
  }
  for (const enabledNamespace of enabledNamespaces) {
    if (enabledNamespace.test(namespace)) {
      return true;
    }
  }
  return false;
}
function disable() {
  const result = enabledString || "";
  enable("");
  return result;
}
function createDebugger(namespace) {
  const newDebugger = Object.assign(debug, {
    enabled: enabled(namespace),
    destroy,
    log: debugObj.log,
    namespace,
    extend
  });
  function debug(...args) {
    if (!newDebugger.enabled) {
      return;
    }
    if (args.length > 0) {
      args[0] = `${namespace} ${args[0]}`;
    }
    newDebugger.log(...args);
  }
  debuggers.push(newDebugger);
  return newDebugger;
}
function destroy() {
  const index = debuggers.indexOf(this);
  if (index >= 0) {
    debuggers.splice(index, 1);
    return true;
  }
  return false;
}
function extend(namespace) {
  const newDebugger = createDebugger(`${this.namespace}:${namespace}`);
  newDebugger.log = this.log;
  return newDebugger;
}
var debug_default = debugObj;

// node_modules/@azure/logger/dist/browser/index.js
var registeredLoggers = /* @__PURE__ */ new Set();
var logLevelFromEnv = typeof process !== "undefined" && process.env && process.env.AZURE_LOG_LEVEL || void 0;
var azureLogLevel;
var AzureLogger = debug_default("azure");
AzureLogger.log = (...args) => {
  debug_default.log(...args);
};
var AZURE_LOG_LEVELS = ["verbose", "info", "warning", "error"];
if (logLevelFromEnv) {
  if (isAzureLogLevel(logLevelFromEnv)) {
    setLogLevel(logLevelFromEnv);
  } else {
    console.error(`AZURE_LOG_LEVEL set to unknown log level '${logLevelFromEnv}'; logging is not enabled. Acceptable values: ${AZURE_LOG_LEVELS.join(", ")}.`);
  }
}
function setLogLevel(level) {
  if (level && !isAzureLogLevel(level)) {
    throw new Error(`Unknown log level '${level}'. Acceptable values: ${AZURE_LOG_LEVELS.join(",")}`);
  }
  azureLogLevel = level;
  const enabledNamespaces2 = [];
  for (const logger3 of registeredLoggers) {
    if (shouldEnable(logger3)) {
      enabledNamespaces2.push(logger3.namespace);
    }
  }
  debug_default.enable(enabledNamespaces2.join(","));
}
var levelMap = {
  verbose: 400,
  info: 300,
  warning: 200,
  error: 100
};
function createClientLogger(namespace) {
  const clientRootLogger = AzureLogger.extend(namespace);
  patchLogMethod(AzureLogger, clientRootLogger);
  return {
    error: createLogger(clientRootLogger, "error"),
    warning: createLogger(clientRootLogger, "warning"),
    info: createLogger(clientRootLogger, "info"),
    verbose: createLogger(clientRootLogger, "verbose")
  };
}
function patchLogMethod(parent, child) {
  child.log = (...args) => {
    parent.log(...args);
  };
}
function createLogger(parent, level) {
  const logger3 = Object.assign(parent.extend(level), {
    level
  });
  patchLogMethod(parent, logger3);
  if (shouldEnable(logger3)) {
    const enabledNamespaces2 = debug_default.disable();
    debug_default.enable(enabledNamespaces2 + "," + logger3.namespace);
  }
  registeredLoggers.add(logger3);
  return logger3;
}
function shouldEnable(logger3) {
  return Boolean(azureLogLevel && levelMap[logger3.level] <= levelMap[azureLogLevel]);
}
function isAzureLogLevel(logLevel) {
  return AZURE_LOG_LEVELS.includes(logLevel);
}

// node_modules/@azure/core-rest-pipeline/dist/browser/log.js
var logger = createClientLogger("core-rest-pipeline");

// node_modules/@azure/core-rest-pipeline/dist/browser/util/sanitizer.js
var RedactedString = "REDACTED";
var defaultAllowedHeaderNames = [
  "x-ms-client-request-id",
  "x-ms-return-client-request-id",
  "x-ms-useragent",
  "x-ms-correlation-request-id",
  "x-ms-request-id",
  "client-request-id",
  "ms-cv",
  "return-client-request-id",
  "traceparent",
  "Access-Control-Allow-Credentials",
  "Access-Control-Allow-Headers",
  "Access-Control-Allow-Methods",
  "Access-Control-Allow-Origin",
  "Access-Control-Expose-Headers",
  "Access-Control-Max-Age",
  "Access-Control-Request-Headers",
  "Access-Control-Request-Method",
  "Origin",
  "Accept",
  "Accept-Encoding",
  "Cache-Control",
  "Connection",
  "Content-Length",
  "Content-Type",
  "Date",
  "ETag",
  "Expires",
  "If-Match",
  "If-Modified-Since",
  "If-None-Match",
  "If-Unmodified-Since",
  "Last-Modified",
  "Pragma",
  "Request-Id",
  "Retry-After",
  "Server",
  "Transfer-Encoding",
  "User-Agent",
  "WWW-Authenticate"
];
var defaultAllowedQueryParameters = ["api-version"];
var Sanitizer = class {
  constructor({ additionalAllowedHeaderNames: allowedHeaderNames = [], additionalAllowedQueryParameters: allowedQueryParameters = [] } = {}) {
    allowedHeaderNames = defaultAllowedHeaderNames.concat(allowedHeaderNames);
    allowedQueryParameters = defaultAllowedQueryParameters.concat(allowedQueryParameters);
    this.allowedHeaderNames = new Set(allowedHeaderNames.map((n) => n.toLowerCase()));
    this.allowedQueryParameters = new Set(allowedQueryParameters.map((p) => p.toLowerCase()));
  }
  sanitize(obj) {
    const seen = /* @__PURE__ */ new Set();
    return JSON.stringify(obj, (key, value) => {
      if (value instanceof Error) {
        return Object.assign(Object.assign({}, value), { name: value.name, message: value.message });
      }
      if (key === "headers") {
        return this.sanitizeHeaders(value);
      } else if (key === "url") {
        return this.sanitizeUrl(value);
      } else if (key === "query") {
        return this.sanitizeQuery(value);
      } else if (key === "body") {
        return void 0;
      } else if (key === "response") {
        return void 0;
      } else if (key === "operationSpec") {
        return void 0;
      } else if (Array.isArray(value) || isObject(value)) {
        if (seen.has(value)) {
          return "[Circular]";
        }
        seen.add(value);
      }
      return value;
    }, 2);
  }
  sanitizeHeaders(obj) {
    const sanitized = {};
    for (const key of Object.keys(obj)) {
      if (this.allowedHeaderNames.has(key.toLowerCase())) {
        sanitized[key] = obj[key];
      } else {
        sanitized[key] = RedactedString;
      }
    }
    return sanitized;
  }
  sanitizeQuery(value) {
    if (typeof value !== "object" || value === null) {
      return value;
    }
    const sanitized = {};
    for (const k of Object.keys(value)) {
      if (this.allowedQueryParameters.has(k.toLowerCase())) {
        sanitized[k] = value[k];
      } else {
        sanitized[k] = RedactedString;
      }
    }
    return sanitized;
  }
  sanitizeUrl(value) {
    if (typeof value !== "string" || value === null) {
      return value;
    }
    const url = new URL(value);
    if (!url.search) {
      return value;
    }
    for (const [key] of url.searchParams) {
      if (!this.allowedQueryParameters.has(key.toLowerCase())) {
        url.searchParams.set(key, RedactedString);
      }
    }
    return url.toString();
  }
};

// node_modules/@azure/core-rest-pipeline/dist/browser/policies/logPolicy.js
var logPolicyName = "logPolicy";
function logPolicy(options = {}) {
  var _a3;
  const logger3 = (_a3 = options.logger) !== null && _a3 !== void 0 ? _a3 : logger.info;
  const sanitizer = new Sanitizer({
    additionalAllowedHeaderNames: options.additionalAllowedHeaderNames,
    additionalAllowedQueryParameters: options.additionalAllowedQueryParameters
  });
  return {
    name: logPolicyName,
    sendRequest(request, next) {
      return __async(this, null, function* () {
        if (!logger3.enabled) {
          return next(request);
        }
        logger3(`Request: ${sanitizer.sanitize(request)}`);
        const response = yield next(request);
        logger3(`Response status code: ${response.status}`);
        logger3(`Headers: ${sanitizer.sanitize(response.headers)}`);
        return response;
      });
    }
  };
}

// node_modules/@azure/core-rest-pipeline/dist/browser/policies/redirectPolicy.js
var redirectPolicyName = "redirectPolicy";
var allowedRedirect = ["GET", "HEAD"];
function redirectPolicy(options = {}) {
  const { maxRetries = 20 } = options;
  return {
    name: redirectPolicyName,
    sendRequest(request, next) {
      return __async(this, null, function* () {
        const response = yield next(request);
        return handleRedirect(next, response, maxRetries);
      });
    }
  };
}
function handleRedirect(next, response, maxRetries, currentRetries = 0) {
  return __async(this, null, function* () {
    const { request, status, headers } = response;
    const locationHeader = headers.get("location");
    if (locationHeader && (status === 300 || status === 301 && allowedRedirect.includes(request.method) || status === 302 && allowedRedirect.includes(request.method) || status === 303 && request.method === "POST" || status === 307) && currentRetries < maxRetries) {
      const url = new URL(locationHeader, request.url);
      request.url = url.toString();
      if (status === 303) {
        request.method = "GET";
        request.headers.delete("Content-Length");
        delete request.body;
      }
      request.headers.delete("Authorization");
      const res = yield next(request);
      return handleRedirect(next, res, maxRetries, currentRetries + 1);
    }
    return response;
  });
}

// node_modules/@azure/core-rest-pipeline/dist/browser/util/userAgentPlatform.js
function getHeaderName() {
  return "x-ms-useragent";
}
function setPlatformSpecificData(map) {
  var _a3, _b2, _c2;
  const localNavigator = globalThis.navigator;
  map.set("OS", ((_c2 = (_b2 = (_a3 = localNavigator === null || localNavigator === void 0 ? void 0 : localNavigator.userAgentData) === null || _a3 === void 0 ? void 0 : _a3.platform) !== null && _b2 !== void 0 ? _b2 : localNavigator === null || localNavigator === void 0 ? void 0 : localNavigator.platform) !== null && _c2 !== void 0 ? _c2 : "unknown").replace(" ", ""));
}

// node_modules/@azure/core-rest-pipeline/dist/browser/constants.js
var SDK_VERSION = "1.15.2";
var DEFAULT_RETRY_POLICY_COUNT = 3;

// node_modules/@azure/core-rest-pipeline/dist/browser/util/userAgent.js
function getUserAgentString(telemetryInfo) {
  const parts = [];
  for (const [key, value] of telemetryInfo) {
    const token = value ? `${key}/${value}` : key;
    parts.push(token);
  }
  return parts.join(" ");
}
function getUserAgentHeaderName() {
  return getHeaderName();
}
function getUserAgentValue(prefix) {
  const runtimeInfo = /* @__PURE__ */ new Map();
  runtimeInfo.set("core-rest-pipeline", SDK_VERSION);
  setPlatformSpecificData(runtimeInfo);
  const defaultAgent = getUserAgentString(runtimeInfo);
  const userAgentValue = prefix ? `${prefix} ${defaultAgent}` : defaultAgent;
  return userAgentValue;
}

// node_modules/@azure/core-rest-pipeline/dist/browser/policies/userAgentPolicy.js
var UserAgentHeaderName = getUserAgentHeaderName();
var userAgentPolicyName = "userAgentPolicy";
function userAgentPolicy(options = {}) {
  const userAgentValue = getUserAgentValue(options.userAgentPrefix);
  return {
    name: userAgentPolicyName,
    sendRequest(request, next) {
      return __async(this, null, function* () {
        if (!request.headers.has(UserAgentHeaderName)) {
          request.headers.set(UserAgentHeaderName, userAgentValue);
        }
        return next(request);
      });
    }
  };
}

// node_modules/@azure/core-rest-pipeline/dist/browser/util/typeGuards.js
function isNodeReadableStream(x) {
  return Boolean(x && typeof x["pipe"] === "function");
}
function isWebReadableStream(x) {
  return Boolean(x && typeof x.getReader === "function" && typeof x.tee === "function");
}
function isBlob(x) {
  return typeof x.stream === "function";
}

// node_modules/@azure/core-rest-pipeline/dist/browser/util/file.js
var unimplementedMethods = {
  arrayBuffer: () => {
    throw new Error("Not implemented");
  },
  slice: () => {
    throw new Error("Not implemented");
  },
  text: () => {
    throw new Error("Not implemented");
  }
};
var rawContent = Symbol("rawContent");
function hasRawContent(x) {
  return typeof x[rawContent] === "function";
}
function getRawContent(blob) {
  if (hasRawContent(blob)) {
    return blob[rawContent]();
  } else {
    return blob.stream();
  }
}
function createFile(content, name, options = {}) {
  var _a3, _b2, _c2;
  if (isNode) {
    return Object.assign(Object.assign({}, unimplementedMethods), { type: (_a3 = options.type) !== null && _a3 !== void 0 ? _a3 : "", lastModified: (_b2 = options.lastModified) !== null && _b2 !== void 0 ? _b2 : (/* @__PURE__ */ new Date()).getTime(), webkitRelativePath: (_c2 = options.webkitRelativePath) !== null && _c2 !== void 0 ? _c2 : "", size: content.byteLength, name, arrayBuffer: () => __async(this, null, function* () {
      return content.buffer;
    }), stream: () => new Blob([content]).stream(), [rawContent]: () => content });
  } else {
    return new File([content], name, options);
  }
}

// node_modules/@azure/core-rest-pipeline/dist/browser/util/concat.js
function drain(stream) {
  return new Response(stream).blob();
}
function toBlobPart(source) {
  return __async(this, null, function* () {
    if (source instanceof Blob || source instanceof Uint8Array) {
      return source;
    }
    if (isWebReadableStream(source)) {
      return drain(source);
    }
    const rawContent2 = getRawContent(source);
    if (isNodeReadableStream(rawContent2)) {
      throw new Error("Encountered unexpected type. In the browser, `concat` supports Web ReadableStream, Blob, Uint8Array, and files created using `createFile` only.");
    }
    return toBlobPart(rawContent2);
  });
}
function concat(sources) {
  return __async(this, null, function* () {
    const parts = [];
    for (const source of sources) {
      parts.push(yield toBlobPart(typeof source === "function" ? source() : source));
    }
    return new Blob(parts);
  });
}

// node_modules/@azure/core-rest-pipeline/dist/browser/policies/multipartPolicy.js
function generateBoundary() {
  return `----AzSDKFormBoundary${randomUUID()}`;
}
function encodeHeaders(headers) {
  let result = "";
  for (const [key, value] of headers) {
    result += `${key}: ${value}\r
`;
  }
  return result;
}
function getLength(source) {
  if (source instanceof Uint8Array) {
    return source.byteLength;
  } else if (isBlob(source)) {
    return source.size === -1 ? void 0 : source.size;
  } else {
    return void 0;
  }
}
function getTotalLength(sources) {
  let total = 0;
  for (const source of sources) {
    const partLength = getLength(source);
    if (partLength === void 0) {
      return void 0;
    } else {
      total += partLength;
    }
  }
  return total;
}
function buildRequestBody(request, parts, boundary) {
  return __async(this, null, function* () {
    const sources = [
      stringToUint8Array(`--${boundary}`, "utf-8"),
      ...parts.flatMap((part) => [
        stringToUint8Array("\r\n", "utf-8"),
        stringToUint8Array(encodeHeaders(part.headers), "utf-8"),
        stringToUint8Array("\r\n", "utf-8"),
        part.body,
        stringToUint8Array(`\r
--${boundary}`, "utf-8")
      ]),
      stringToUint8Array("--\r\n\r\n", "utf-8")
    ];
    const contentLength = getTotalLength(sources);
    if (contentLength) {
      request.headers.set("Content-Length", contentLength);
    }
    request.body = yield concat(sources);
  });
}
var multipartPolicyName = "multipartPolicy";
var maxBoundaryLength = 70;
var validBoundaryCharacters = new Set(`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'()+,-./:=?`);
function assertValidBoundary(boundary) {
  if (boundary.length > maxBoundaryLength) {
    throw new Error(`Multipart boundary "${boundary}" exceeds maximum length of 70 characters`);
  }
  if (Array.from(boundary).some((x) => !validBoundaryCharacters.has(x))) {
    throw new Error(`Multipart boundary "${boundary}" contains invalid characters`);
  }
}
function multipartPolicy() {
  return {
    name: multipartPolicyName,
    sendRequest(request, next) {
      return __async(this, null, function* () {
        var _a4;
        if (!request.multipartBody) {
          return next(request);
        }
        if (request.body) {
          throw new Error("multipartBody and regular body cannot be set at the same time");
        }
        let boundary = request.multipartBody.boundary;
        const contentTypeHeader = (_a4 = request.headers.get("Content-Type")) !== null && _a4 !== void 0 ? _a4 : "multipart/mixed";
        const parsedHeader = contentTypeHeader.match(/^(multipart\/[^ ;]+)(?:; *boundary=(.+))?$/);
        if (!parsedHeader) {
          throw new Error(`Got multipart request body, but content-type header was not multipart: ${contentTypeHeader}`);
        }
        const [, contentType, parsedBoundary] = parsedHeader;
        if (parsedBoundary && boundary && parsedBoundary !== boundary) {
          throw new Error(`Multipart boundary was specified as ${parsedBoundary} in the header, but got ${boundary} in the request body`);
        }
        boundary !== null && boundary !== void 0 ? boundary : boundary = parsedBoundary;
        if (boundary) {
          assertValidBoundary(boundary);
        } else {
          boundary = generateBoundary();
        }
        request.headers.set("Content-Type", `${contentType}; boundary=${boundary}`);
        yield buildRequestBody(request, request.multipartBody.parts, boundary);
        request.multipartBody = void 0;
        return next(request);
      });
    }
  };
}

// node_modules/@azure/core-rest-pipeline/dist/browser/policies/decompressResponsePolicy.js
function decompressResponsePolicy() {
  throw new Error("decompressResponsePolicy is not supported in browser environment");
}

// node_modules/@azure/core-rest-pipeline/dist/browser/util/helpers.js
var StandardAbortMessage = "The operation was aborted.";
function delay2(delayInMs, value, options) {
  return new Promise((resolve, reject) => {
    let timer = void 0;
    let onAborted = void 0;
    const rejectOnAbort = () => {
      return reject(new AbortError((options === null || options === void 0 ? void 0 : options.abortErrorMsg) ? options === null || options === void 0 ? void 0 : options.abortErrorMsg : StandardAbortMessage));
    };
    const removeListeners = () => {
      if ((options === null || options === void 0 ? void 0 : options.abortSignal) && onAborted) {
        options.abortSignal.removeEventListener("abort", onAborted);
      }
    };
    onAborted = () => {
      if (timer) {
        clearTimeout(timer);
      }
      removeListeners();
      return rejectOnAbort();
    };
    if ((options === null || options === void 0 ? void 0 : options.abortSignal) && options.abortSignal.aborted) {
      return rejectOnAbort();
    }
    timer = setTimeout(() => {
      removeListeners();
      resolve(value);
    }, delayInMs);
    if (options === null || options === void 0 ? void 0 : options.abortSignal) {
      options.abortSignal.addEventListener("abort", onAborted);
    }
  });
}
function parseHeaderValueAsNumber(response, headerName) {
  const value = response.headers.get(headerName);
  if (!value)
    return;
  const valueAsNum = Number(value);
  if (Number.isNaN(valueAsNum))
    return;
  return valueAsNum;
}

// node_modules/@azure/core-rest-pipeline/dist/browser/retryStrategies/throttlingRetryStrategy.js
var RetryAfterHeader = "Retry-After";
var AllRetryAfterHeaders = ["retry-after-ms", "x-ms-retry-after-ms", RetryAfterHeader];
function getRetryAfterInMs(response) {
  if (!(response && [429, 503].includes(response.status)))
    return void 0;
  try {
    for (const header of AllRetryAfterHeaders) {
      const retryAfterValue = parseHeaderValueAsNumber(response, header);
      if (retryAfterValue === 0 || retryAfterValue) {
        const multiplyingFactor = header === RetryAfterHeader ? 1e3 : 1;
        return retryAfterValue * multiplyingFactor;
      }
    }
    const retryAfterHeader = response.headers.get(RetryAfterHeader);
    if (!retryAfterHeader)
      return;
    const date = Date.parse(retryAfterHeader);
    const diff = date - Date.now();
    return Number.isFinite(diff) ? Math.max(0, diff) : void 0;
  } catch (e) {
    return void 0;
  }
}
function isThrottlingRetryResponse(response) {
  return Number.isFinite(getRetryAfterInMs(response));
}
function throttlingRetryStrategy() {
  return {
    name: "throttlingRetryStrategy",
    retry({ response }) {
      const retryAfterInMs = getRetryAfterInMs(response);
      if (!Number.isFinite(retryAfterInMs)) {
        return { skipStrategy: true };
      }
      return {
        retryAfterInMs
      };
    }
  };
}

// node_modules/@azure/core-rest-pipeline/dist/browser/retryStrategies/exponentialRetryStrategy.js
var DEFAULT_CLIENT_RETRY_INTERVAL = 1e3;
var DEFAULT_CLIENT_MAX_RETRY_INTERVAL = 1e3 * 64;
function exponentialRetryStrategy(options = {}) {
  var _a3, _b2;
  const retryInterval = (_a3 = options.retryDelayInMs) !== null && _a3 !== void 0 ? _a3 : DEFAULT_CLIENT_RETRY_INTERVAL;
  const maxRetryInterval = (_b2 = options.maxRetryDelayInMs) !== null && _b2 !== void 0 ? _b2 : DEFAULT_CLIENT_MAX_RETRY_INTERVAL;
  let retryAfterInMs = retryInterval;
  return {
    name: "exponentialRetryStrategy",
    retry({ retryCount, response, responseError }) {
      const matchedSystemError = isSystemError(responseError);
      const ignoreSystemErrors = matchedSystemError && options.ignoreSystemErrors;
      const isExponential = isExponentialRetryResponse(response);
      const ignoreExponentialResponse = isExponential && options.ignoreHttpStatusCodes;
      const unknownResponse = response && (isThrottlingRetryResponse(response) || !isExponential);
      if (unknownResponse || ignoreExponentialResponse || ignoreSystemErrors) {
        return { skipStrategy: true };
      }
      if (responseError && !matchedSystemError && !isExponential) {
        return { errorToThrow: responseError };
      }
      const exponentialDelay = retryAfterInMs * Math.pow(2, retryCount);
      const clampedExponentialDelay = Math.min(maxRetryInterval, exponentialDelay);
      retryAfterInMs = clampedExponentialDelay / 2 + getRandomIntegerInclusive(0, clampedExponentialDelay / 2);
      return { retryAfterInMs };
    }
  };
}
function isExponentialRetryResponse(response) {
  return Boolean(response && response.status !== void 0 && (response.status >= 500 || response.status === 408) && response.status !== 501 && response.status !== 505);
}
function isSystemError(err) {
  if (!err) {
    return false;
  }
  return err.code === "ETIMEDOUT" || err.code === "ESOCKETTIMEDOUT" || err.code === "ECONNREFUSED" || err.code === "ECONNRESET" || err.code === "ENOENT" || err.code === "ENOTFOUND";
}

// node_modules/@azure/core-rest-pipeline/dist/browser/policies/retryPolicy.js
var retryPolicyLogger = createClientLogger("core-rest-pipeline retryPolicy");
var retryPolicyName = "retryPolicy";
function retryPolicy(strategies, options = { maxRetries: DEFAULT_RETRY_POLICY_COUNT }) {
  const logger3 = options.logger || retryPolicyLogger;
  return {
    name: retryPolicyName,
    sendRequest(request, next) {
      return __async(this, null, function* () {
        var _a4, _b2;
        let response;
        let responseError;
        let retryCount = -1;
        retryRequest:
          while (true) {
            retryCount += 1;
            response = void 0;
            responseError = void 0;
            try {
              logger3.info(`Retry ${retryCount}: Attempting to send request`, request.requestId);
              response = yield next(request);
              logger3.info(`Retry ${retryCount}: Received a response from request`, request.requestId);
            } catch (e) {
              logger3.error(`Retry ${retryCount}: Received an error from request`, request.requestId);
              responseError = e;
              if (!e || responseError.name !== "RestError") {
                throw e;
              }
              response = responseError.response;
            }
            if ((_a4 = request.abortSignal) === null || _a4 === void 0 ? void 0 : _a4.aborted) {
              logger3.error(`Retry ${retryCount}: Request aborted.`);
              const abortError = new AbortError();
              throw abortError;
            }
            if (retryCount >= ((_b2 = options.maxRetries) !== null && _b2 !== void 0 ? _b2 : DEFAULT_RETRY_POLICY_COUNT)) {
              logger3.info(`Retry ${retryCount}: Maximum retries reached. Returning the last received response, or throwing the last received error.`);
              if (responseError) {
                throw responseError;
              } else if (response) {
                return response;
              } else {
                throw new Error("Maximum retries reached with no response or error to throw");
              }
            }
            logger3.info(`Retry ${retryCount}: Processing ${strategies.length} retry strategies.`);
            strategiesLoop:
              for (const strategy of strategies) {
                const strategyLogger = strategy.logger || retryPolicyLogger;
                strategyLogger.info(`Retry ${retryCount}: Processing retry strategy ${strategy.name}.`);
                const modifiers = strategy.retry({
                  retryCount,
                  response,
                  responseError
                });
                if (modifiers.skipStrategy) {
                  strategyLogger.info(`Retry ${retryCount}: Skipped.`);
                  continue strategiesLoop;
                }
                const { errorToThrow, retryAfterInMs, redirectTo } = modifiers;
                if (errorToThrow) {
                  strategyLogger.error(`Retry ${retryCount}: Retry strategy ${strategy.name} throws error:`, errorToThrow);
                  throw errorToThrow;
                }
                if (retryAfterInMs || retryAfterInMs === 0) {
                  strategyLogger.info(`Retry ${retryCount}: Retry strategy ${strategy.name} retries after ${retryAfterInMs}`);
                  yield delay2(retryAfterInMs, void 0, { abortSignal: request.abortSignal });
                  continue retryRequest;
                }
                if (redirectTo) {
                  strategyLogger.info(`Retry ${retryCount}: Retry strategy ${strategy.name} redirects to ${redirectTo}`);
                  request.url = redirectTo;
                  continue retryRequest;
                }
              }
            if (responseError) {
              logger3.info(`None of the retry strategies could work with the received error. Throwing it.`);
              throw responseError;
            }
            if (response) {
              logger3.info(`None of the retry strategies could work with the received response. Returning it.`);
              return response;
            }
          }
      });
    }
  };
}

// node_modules/@azure/core-rest-pipeline/dist/browser/policies/defaultRetryPolicy.js
var defaultRetryPolicyName = "defaultRetryPolicy";
function defaultRetryPolicy(options = {}) {
  var _a3;
  return {
    name: defaultRetryPolicyName,
    sendRequest: retryPolicy([throttlingRetryStrategy(), exponentialRetryStrategy(options)], {
      maxRetries: (_a3 = options.maxRetries) !== null && _a3 !== void 0 ? _a3 : DEFAULT_RETRY_POLICY_COUNT
    }).sendRequest
  };
}

// node_modules/@azure/core-rest-pipeline/dist/browser/httpHeaders.js
function normalizeName(name) {
  return name.toLowerCase();
}
function* headerIterator(map) {
  for (const entry of map.values()) {
    yield [entry.name, entry.value];
  }
}
var HttpHeadersImpl = class {
  constructor(rawHeaders) {
    this._headersMap = /* @__PURE__ */ new Map();
    if (rawHeaders) {
      for (const headerName of Object.keys(rawHeaders)) {
        this.set(headerName, rawHeaders[headerName]);
      }
    }
  }
  /**
   * Set a header in this collection with the provided name and value. The name is
   * case-insensitive.
   * @param name - The name of the header to set. This value is case-insensitive.
   * @param value - The value of the header to set.
   */
  set(name, value) {
    this._headersMap.set(normalizeName(name), { name, value: String(value).trim() });
  }
  /**
   * Get the header value for the provided header name, or undefined if no header exists in this
   * collection with the provided name.
   * @param name - The name of the header. This value is case-insensitive.
   */
  get(name) {
    var _a3;
    return (_a3 = this._headersMap.get(normalizeName(name))) === null || _a3 === void 0 ? void 0 : _a3.value;
  }
  /**
   * Get whether or not this header collection contains a header entry for the provided header name.
   * @param name - The name of the header to set. This value is case-insensitive.
   */
  has(name) {
    return this._headersMap.has(normalizeName(name));
  }
  /**
   * Remove the header with the provided headerName.
   * @param name - The name of the header to remove.
   */
  delete(name) {
    this._headersMap.delete(normalizeName(name));
  }
  /**
   * Get the JSON object representation of this HTTP header collection.
   */
  toJSON(options = {}) {
    const result = {};
    if (options.preserveCase) {
      for (const entry of this._headersMap.values()) {
        result[entry.name] = entry.value;
      }
    } else {
      for (const [normalizedName, entry] of this._headersMap) {
        result[normalizedName] = entry.value;
      }
    }
    return result;
  }
  /**
   * Get the string representation of this HTTP header collection.
   */
  toString() {
    return JSON.stringify(this.toJSON({ preserveCase: true }));
  }
  /**
   * Iterate over tuples of header [name, value] pairs.
   */
  [Symbol.iterator]() {
    return headerIterator(this._headersMap);
  }
};
function createHttpHeaders(rawHeaders) {
  return new HttpHeadersImpl(rawHeaders);
}

// node_modules/@azure/core-rest-pipeline/dist/browser/policies/formDataPolicy.js
var formDataPolicyName = "formDataPolicy";
function formDataPolicy() {
  return {
    name: formDataPolicyName,
    sendRequest(request, next) {
      return __async(this, null, function* () {
        if (request.formData) {
          const contentType = request.headers.get("Content-Type");
          if (contentType && contentType.indexOf("application/x-www-form-urlencoded") !== -1) {
            request.body = wwwFormUrlEncode(request.formData);
          } else {
            yield prepareFormData(request.formData, request);
          }
          request.formData = void 0;
        }
        return next(request);
      });
    }
  };
}
function wwwFormUrlEncode(formData) {
  const urlSearchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(formData)) {
    if (Array.isArray(value)) {
      for (const subValue of value) {
        urlSearchParams.append(key, subValue.toString());
      }
    } else {
      urlSearchParams.append(key, value.toString());
    }
  }
  return urlSearchParams.toString();
}
function prepareFormData(formData, request) {
  return __async(this, null, function* () {
    const contentType = request.headers.get("Content-Type");
    if (contentType && !contentType.startsWith("multipart/form-data")) {
      return;
    }
    request.headers.set("Content-Type", contentType !== null && contentType !== void 0 ? contentType : "multipart/form-data");
    const parts = [];
    for (const [fieldName, values] of Object.entries(formData)) {
      for (const value of Array.isArray(values) ? values : [values]) {
        if (typeof value === "string") {
          parts.push({
            headers: createHttpHeaders({
              "Content-Disposition": `form-data; name="${fieldName}"`
            }),
            body: stringToUint8Array(value, "utf-8")
          });
        } else if (value === void 0 || value === null || typeof value !== "object") {
          throw new Error(`Unexpected value for key ${fieldName}: ${value}. Value should be serialized to string first.`);
        } else {
          const fileName = value.name || "blob";
          const headers = createHttpHeaders();
          headers.set("Content-Disposition", `form-data; name="${fieldName}"; filename="${fileName}"`);
          headers.set("Content-Type", value.type || "application/octet-stream");
          parts.push({
            headers,
            body: value
          });
        }
      }
    }
    request.multipartBody = { parts };
  });
}

// node_modules/@azure/core-rest-pipeline/dist/browser/policies/proxyPolicy.js
var errorMessage = "proxyPolicy is not supported in browser environment";
function proxyPolicy() {
  throw new Error(errorMessage);
}

// node_modules/@azure/core-rest-pipeline/dist/browser/policies/setClientRequestIdPolicy.js
var setClientRequestIdPolicyName = "setClientRequestIdPolicy";
function setClientRequestIdPolicy(requestIdHeaderName = "x-ms-client-request-id") {
  return {
    name: setClientRequestIdPolicyName,
    sendRequest(request, next) {
      return __async(this, null, function* () {
        if (!request.headers.has(requestIdHeaderName)) {
          request.headers.set(requestIdHeaderName, request.requestId);
        }
        return next(request);
      });
    }
  };
}

// node_modules/@azure/core-rest-pipeline/dist/browser/policies/tlsPolicy.js
var tlsPolicyName = "tlsPolicy";
function tlsPolicy(tlsSettings) {
  return {
    name: tlsPolicyName,
    sendRequest: (req, next) => __async(this, null, function* () {
      if (!req.tlsSettings) {
        req.tlsSettings = tlsSettings;
      }
      return next(req);
    })
  };
}

// node_modules/@azure/core-tracing/dist/browser/tracingContext.js
var knownContextKeys = {
  span: Symbol.for("@azure/core-tracing span"),
  namespace: Symbol.for("@azure/core-tracing namespace")
};
function createTracingContext(options = {}) {
  let context = new TracingContextImpl(options.parentContext);
  if (options.span) {
    context = context.setValue(knownContextKeys.span, options.span);
  }
  if (options.namespace) {
    context = context.setValue(knownContextKeys.namespace, options.namespace);
  }
  return context;
}
var TracingContextImpl = class _TracingContextImpl {
  constructor(initialContext) {
    this._contextMap = initialContext instanceof _TracingContextImpl ? new Map(initialContext._contextMap) : /* @__PURE__ */ new Map();
  }
  setValue(key, value) {
    const newContext = new _TracingContextImpl(this);
    newContext._contextMap.set(key, value);
    return newContext;
  }
  getValue(key) {
    return this._contextMap.get(key);
  }
  deleteValue(key) {
    const newContext = new _TracingContextImpl(this);
    newContext._contextMap.delete(key);
    return newContext;
  }
};

// node_modules/@azure/core-tracing/dist/browser/state.js
var state = {
  instrumenterImplementation: void 0
};

// node_modules/@azure/core-tracing/dist/browser/instrumenter.js
function createDefaultTracingSpan() {
  return {
    end: () => {
    },
    isRecording: () => false,
    recordException: () => {
    },
    setAttribute: () => {
    },
    setStatus: () => {
    }
  };
}
function createDefaultInstrumenter() {
  return {
    createRequestHeaders: () => {
      return {};
    },
    parseTraceparentHeader: () => {
      return void 0;
    },
    startSpan: (_name, spanOptions) => {
      return {
        span: createDefaultTracingSpan(),
        tracingContext: createTracingContext({ parentContext: spanOptions.tracingContext })
      };
    },
    withContext(_context, callback, ...callbackArgs) {
      return callback(...callbackArgs);
    }
  };
}
function getInstrumenter() {
  if (!state.instrumenterImplementation) {
    state.instrumenterImplementation = createDefaultInstrumenter();
  }
  return state.instrumenterImplementation;
}

// node_modules/@azure/core-tracing/dist/browser/tracingClient.js
function createTracingClient(options) {
  const { namespace, packageName, packageVersion } = options;
  function startSpan(name, operationOptions, spanOptions) {
    var _a3;
    const startSpanResult = getInstrumenter().startSpan(name, Object.assign(Object.assign({}, spanOptions), { packageName, packageVersion, tracingContext: (_a3 = operationOptions === null || operationOptions === void 0 ? void 0 : operationOptions.tracingOptions) === null || _a3 === void 0 ? void 0 : _a3.tracingContext }));
    let tracingContext = startSpanResult.tracingContext;
    const span = startSpanResult.span;
    if (!tracingContext.getValue(knownContextKeys.namespace)) {
      tracingContext = tracingContext.setValue(knownContextKeys.namespace, namespace);
    }
    span.setAttribute("az.namespace", tracingContext.getValue(knownContextKeys.namespace));
    const updatedOptions = Object.assign({}, operationOptions, {
      tracingOptions: Object.assign(Object.assign({}, operationOptions === null || operationOptions === void 0 ? void 0 : operationOptions.tracingOptions), { tracingContext })
    });
    return {
      span,
      updatedOptions
    };
  }
  function withSpan(name, operationOptions, callback, spanOptions) {
    return __async(this, null, function* () {
      const { span, updatedOptions } = startSpan(name, operationOptions, spanOptions);
      try {
        const result = yield withContext(updatedOptions.tracingOptions.tracingContext, () => Promise.resolve(callback(updatedOptions, span)));
        span.setStatus({ status: "success" });
        return result;
      } catch (err) {
        span.setStatus({ status: "error", error: err });
        throw err;
      } finally {
        span.end();
      }
    });
  }
  function withContext(context, callback, ...callbackArgs) {
    return getInstrumenter().withContext(context, callback, ...callbackArgs);
  }
  function parseTraceparentHeader(traceparentHeader) {
    return getInstrumenter().parseTraceparentHeader(traceparentHeader);
  }
  function createRequestHeaders(tracingContext) {
    return getInstrumenter().createRequestHeaders(tracingContext);
  }
  return {
    startSpan,
    withSpan,
    withContext,
    parseTraceparentHeader,
    createRequestHeaders
  };
}

// node_modules/@azure/core-rest-pipeline/dist/browser/util/inspect.js
var custom = {};

// node_modules/@azure/core-rest-pipeline/dist/browser/restError.js
var errorSanitizer = new Sanitizer();
var RestError = class _RestError extends Error {
  constructor(message, options = {}) {
    super(message);
    this.name = "RestError";
    this.code = options.code;
    this.statusCode = options.statusCode;
    this.request = options.request;
    this.response = options.response;
    Object.setPrototypeOf(this, _RestError.prototype);
  }
  /**
   * Logging method for util.inspect in Node
   */
  [custom]() {
    return `RestError: ${this.message} 
 ${errorSanitizer.sanitize(this)}`;
  }
};
RestError.REQUEST_SEND_ERROR = "REQUEST_SEND_ERROR";
RestError.PARSE_ERROR = "PARSE_ERROR";
function isRestError(e) {
  if (e instanceof RestError) {
    return true;
  }
  return isError(e) && e.name === "RestError";
}

// node_modules/@azure/core-rest-pipeline/dist/browser/policies/tracingPolicy.js
var tracingPolicyName = "tracingPolicy";
function tracingPolicy(options = {}) {
  const userAgent = getUserAgentValue(options.userAgentPrefix);
  const tracingClient = tryCreateTracingClient();
  return {
    name: tracingPolicyName,
    sendRequest(request, next) {
      return __async(this, null, function* () {
        var _a4, _b2;
        if (!tracingClient || !((_a4 = request.tracingOptions) === null || _a4 === void 0 ? void 0 : _a4.tracingContext)) {
          return next(request);
        }
        const { span, tracingContext } = (_b2 = tryCreateSpan(tracingClient, request, userAgent)) !== null && _b2 !== void 0 ? _b2 : {};
        if (!span || !tracingContext) {
          return next(request);
        }
        try {
          const response = yield tracingClient.withContext(tracingContext, next, request);
          tryProcessResponse(span, response);
          return response;
        } catch (err) {
          tryProcessError(span, err);
          throw err;
        }
      });
    }
  };
}
function tryCreateTracingClient() {
  try {
    return createTracingClient({
      namespace: "",
      packageName: "@azure/core-rest-pipeline",
      packageVersion: SDK_VERSION
    });
  } catch (e) {
    logger.warning(`Error when creating the TracingClient: ${getErrorMessage(e)}`);
    return void 0;
  }
}
function tryCreateSpan(tracingClient, request, userAgent) {
  try {
    const { span, updatedOptions } = tracingClient.startSpan(`HTTP ${request.method}`, { tracingOptions: request.tracingOptions }, {
      spanKind: "client",
      spanAttributes: {
        "http.method": request.method,
        "http.url": request.url,
        requestId: request.requestId
      }
    });
    if (!span.isRecording()) {
      span.end();
      return void 0;
    }
    if (userAgent) {
      span.setAttribute("http.user_agent", userAgent);
    }
    const headers = tracingClient.createRequestHeaders(updatedOptions.tracingOptions.tracingContext);
    for (const [key, value] of Object.entries(headers)) {
      request.headers.set(key, value);
    }
    return { span, tracingContext: updatedOptions.tracingOptions.tracingContext };
  } catch (e) {
    logger.warning(`Skipping creating a tracing span due to an error: ${getErrorMessage(e)}`);
    return void 0;
  }
}
function tryProcessError(span, error) {
  try {
    span.setStatus({
      status: "error",
      error: isError(error) ? error : void 0
    });
    if (isRestError(error) && error.statusCode) {
      span.setAttribute("http.status_code", error.statusCode);
    }
    span.end();
  } catch (e) {
    logger.warning(`Skipping tracing span processing due to an error: ${getErrorMessage(e)}`);
  }
}
function tryProcessResponse(span, response) {
  try {
    span.setAttribute("http.status_code", response.status);
    const serviceRequestId = response.headers.get("x-ms-request-id");
    if (serviceRequestId) {
      span.setAttribute("serviceRequestId", serviceRequestId);
    }
    span.setStatus({
      status: "success"
    });
    span.end();
  } catch (e) {
    logger.warning(`Skipping tracing span processing due to an error: ${getErrorMessage(e)}`);
  }
}

// node_modules/@azure/core-rest-pipeline/dist/browser/createPipelineFromOptions.js
function createPipelineFromOptions(options) {
  var _a3;
  const pipeline = createEmptyPipeline();
  if (isNode) {
    if (options.tlsOptions) {
      pipeline.addPolicy(tlsPolicy(options.tlsOptions));
    }
    pipeline.addPolicy(proxyPolicy(options.proxyOptions));
    pipeline.addPolicy(decompressResponsePolicy());
  }
  pipeline.addPolicy(formDataPolicy(), { beforePolicies: [multipartPolicyName] });
  pipeline.addPolicy(userAgentPolicy(options.userAgentOptions));
  pipeline.addPolicy(setClientRequestIdPolicy((_a3 = options.telemetryOptions) === null || _a3 === void 0 ? void 0 : _a3.clientRequestIdHeaderName));
  pipeline.addPolicy(multipartPolicy(), { afterPhase: "Deserialize" });
  pipeline.addPolicy(defaultRetryPolicy(options.retryOptions), { phase: "Retry" });
  pipeline.addPolicy(tracingPolicy(options.userAgentOptions), { afterPhase: "Retry" });
  if (isNode) {
    pipeline.addPolicy(redirectPolicy(options.redirectOptions), { afterPhase: "Retry" });
  }
  pipeline.addPolicy(logPolicy(options.loggingOptions), { afterPhase: "Sign" });
  return pipeline;
}

// node_modules/@azure/core-rest-pipeline/dist/browser/fetchHttpClient.js
function isBlob2(body) {
  return (typeof Blob === "function" || typeof Blob === "object") && body instanceof Blob;
}
var FetchHttpClient = class {
  /**
   * Makes a request over an underlying transport layer and returns the response.
   * @param request - The request to be made.
   */
  sendRequest(request) {
    return __async(this, null, function* () {
      const url = new URL(request.url);
      const isInsecure = url.protocol !== "https:";
      if (isInsecure && !request.allowInsecureConnection) {
        throw new Error(`Cannot connect to ${request.url} while allowInsecureConnection is false.`);
      }
      if (request.proxySettings) {
        throw new Error("HTTP proxy is not supported in browser environment");
      }
      try {
        return yield makeRequest(request);
      } catch (e) {
        throw getError(e, request);
      }
    });
  }
};
function makeRequest(request) {
  return __async(this, null, function* () {
    const { abortController, abortControllerCleanup } = setupAbortSignal(request);
    try {
      const headers = buildFetchHeaders(request.headers);
      const { streaming, body: requestBody } = buildRequestBody2(request);
      const requestInit = Object.assign(Object.assign({ body: requestBody, method: request.method, headers, signal: abortController.signal }, "credentials" in Request.prototype ? { credentials: request.withCredentials ? "include" : "same-origin" } : {}), "cache" in Request.prototype ? { cache: "no-store" } : {});
      if (streaming) {
        requestInit.duplex = "half";
      }
      const response = yield fetch(request.url, requestInit);
      if (isBlob2(request.body) && request.onUploadProgress) {
        request.onUploadProgress({ loadedBytes: request.body.size });
      }
      return buildPipelineResponse(response, request, abortControllerCleanup);
    } catch (e) {
      abortControllerCleanup === null || abortControllerCleanup === void 0 ? void 0 : abortControllerCleanup();
      throw e;
    }
  });
}
function buildPipelineResponse(httpResponse, request, abortControllerCleanup) {
  return __async(this, null, function* () {
    var _a3, _b2;
    const headers = buildPipelineHeaders(httpResponse);
    const response = {
      request,
      headers,
      status: httpResponse.status
    };
    const bodyStream = isWebReadableStream(httpResponse.body) ? buildBodyStream(httpResponse.body, {
      onProgress: request.onDownloadProgress,
      onEnd: abortControllerCleanup
    }) : httpResponse.body;
    if (
      // Value of POSITIVE_INFINITY in streamResponseStatusCodes is considered as any status code
      ((_a3 = request.streamResponseStatusCodes) === null || _a3 === void 0 ? void 0 : _a3.has(Number.POSITIVE_INFINITY)) || ((_b2 = request.streamResponseStatusCodes) === null || _b2 === void 0 ? void 0 : _b2.has(response.status))
    ) {
      if (request.enableBrowserStreams) {
        response.browserStreamBody = bodyStream !== null && bodyStream !== void 0 ? bodyStream : void 0;
      } else {
        const responseStream = new Response(bodyStream);
        response.blobBody = responseStream.blob();
        abortControllerCleanup === null || abortControllerCleanup === void 0 ? void 0 : abortControllerCleanup();
      }
    } else {
      const responseStream = new Response(bodyStream);
      response.bodyAsText = yield responseStream.text();
      abortControllerCleanup === null || abortControllerCleanup === void 0 ? void 0 : abortControllerCleanup();
    }
    return response;
  });
}
function setupAbortSignal(request) {
  const abortController = new AbortController();
  let abortControllerCleanup;
  let abortListener;
  if (request.abortSignal) {
    if (request.abortSignal.aborted) {
      throw new AbortError("The operation was aborted.");
    }
    abortListener = (event) => {
      if (event.type === "abort") {
        abortController.abort();
      }
    };
    request.abortSignal.addEventListener("abort", abortListener);
    abortControllerCleanup = () => {
      var _a3;
      if (abortListener) {
        (_a3 = request.abortSignal) === null || _a3 === void 0 ? void 0 : _a3.removeEventListener("abort", abortListener);
      }
    };
  }
  if (request.timeout > 0) {
    setTimeout(() => {
      abortController.abort();
    }, request.timeout);
  }
  return { abortController, abortControllerCleanup };
}
function getError(e, request) {
  var _a3;
  if (e && (e === null || e === void 0 ? void 0 : e.name) === "AbortError") {
    return e;
  } else {
    return new RestError(`Error sending request: ${e.message}`, {
      code: (_a3 = e === null || e === void 0 ? void 0 : e.code) !== null && _a3 !== void 0 ? _a3 : RestError.REQUEST_SEND_ERROR,
      request
    });
  }
}
function buildFetchHeaders(pipelineHeaders) {
  const headers = new Headers();
  for (const [name, value] of pipelineHeaders) {
    headers.append(name, value);
  }
  return headers;
}
function buildPipelineHeaders(httpResponse) {
  const responseHeaders = createHttpHeaders();
  for (const [name, value] of httpResponse.headers) {
    responseHeaders.set(name, value);
  }
  return responseHeaders;
}
function buildRequestBody2(request) {
  const body = typeof request.body === "function" ? request.body() : request.body;
  if (isNodeReadableStream(body)) {
    throw new Error("Node streams are not supported in browser environment.");
  }
  return isWebReadableStream(body) ? { streaming: true, body: buildBodyStream(body, { onProgress: request.onUploadProgress }) } : { streaming: false, body };
}
function buildBodyStream(readableStream, options = {}) {
  let loadedBytes = 0;
  const { onProgress, onEnd } = options;
  if (isTransformStreamSupported(readableStream)) {
    return readableStream.pipeThrough(new TransformStream({
      transform(chunk, controller) {
        if (chunk === null) {
          controller.terminate();
          return;
        }
        controller.enqueue(chunk);
        loadedBytes += chunk.length;
        if (onProgress) {
          onProgress({ loadedBytes });
        }
      },
      flush() {
        onEnd === null || onEnd === void 0 ? void 0 : onEnd();
      }
    }));
  } else {
    let _a3;
    const reader = readableStream.getReader();
    return new ReadableStream({
      pull(controller) {
        return __async(this, null, function* () {
          var _a4;
          const { done, value } = yield reader.read();
          if (done || !value) {
            onEnd === null || onEnd === void 0 ? void 0 : onEnd();
            controller.close();
            reader.releaseLock();
            return;
          }
          loadedBytes += (_a4 = value === null || value === void 0 ? void 0 : value.length) !== null && _a4 !== void 0 ? _a4 : 0;
          controller.enqueue(value);
          if (onProgress) {
            onProgress({ loadedBytes });
          }
        });
      },
      cancel(reason) {
        onEnd === null || onEnd === void 0 ? void 0 : onEnd();
        return reader.cancel(reason);
      }
    });
  }
}
function createFetchHttpClient() {
  return new FetchHttpClient();
}
function isTransformStreamSupported(readableStream) {
  return readableStream.pipeThrough !== void 0 && self.TransformStream !== void 0;
}

// node_modules/@azure/core-rest-pipeline/dist/browser/defaultHttpClient.js
function createDefaultHttpClient() {
  return createFetchHttpClient();
}

// node_modules/@azure/core-rest-pipeline/dist/browser/pipelineRequest.js
var PipelineRequestImpl = class {
  constructor(options) {
    var _a3, _b2, _c2, _d2, _e, _f, _g;
    this.url = options.url;
    this.body = options.body;
    this.headers = (_a3 = options.headers) !== null && _a3 !== void 0 ? _a3 : createHttpHeaders();
    this.method = (_b2 = options.method) !== null && _b2 !== void 0 ? _b2 : "GET";
    this.timeout = (_c2 = options.timeout) !== null && _c2 !== void 0 ? _c2 : 0;
    this.multipartBody = options.multipartBody;
    this.formData = options.formData;
    this.disableKeepAlive = (_d2 = options.disableKeepAlive) !== null && _d2 !== void 0 ? _d2 : false;
    this.proxySettings = options.proxySettings;
    this.streamResponseStatusCodes = options.streamResponseStatusCodes;
    this.withCredentials = (_e = options.withCredentials) !== null && _e !== void 0 ? _e : false;
    this.abortSignal = options.abortSignal;
    this.tracingOptions = options.tracingOptions;
    this.onUploadProgress = options.onUploadProgress;
    this.onDownloadProgress = options.onDownloadProgress;
    this.requestId = options.requestId || randomUUID();
    this.allowInsecureConnection = (_f = options.allowInsecureConnection) !== null && _f !== void 0 ? _f : false;
    this.enableBrowserStreams = (_g = options.enableBrowserStreams) !== null && _g !== void 0 ? _g : false;
  }
};
function createPipelineRequest(options) {
  return new PipelineRequestImpl(options);
}

// node_modules/@azure/core-rest-pipeline/dist/browser/util/tokenCycler.js
var DEFAULT_CYCLER_OPTIONS = {
  forcedRefreshWindowInMs: 1e3,
  // Force waiting for a refresh 1s before the token expires
  retryIntervalInMs: 3e3,
  // Allow refresh attempts every 3s
  refreshWindowInMs: 1e3 * 60 * 2
  // Start refreshing 2m before expiry
};
function beginRefresh(getAccessToken, retryIntervalInMs, refreshTimeout) {
  return __async(this, null, function* () {
    function tryGetAccessToken() {
      return __async(this, null, function* () {
        if (Date.now() < refreshTimeout) {
          try {
            return yield getAccessToken();
          } catch (_a3) {
            return null;
          }
        } else {
          const finalToken = yield getAccessToken();
          if (finalToken === null) {
            throw new Error("Failed to refresh access token.");
          }
          return finalToken;
        }
      });
    }
    let token = yield tryGetAccessToken();
    while (token === null) {
      yield delay2(retryIntervalInMs);
      token = yield tryGetAccessToken();
    }
    return token;
  });
}
function createTokenCycler(credential, tokenCyclerOptions) {
  let refreshWorker = null;
  let token = null;
  let tenantId;
  const options = Object.assign(Object.assign({}, DEFAULT_CYCLER_OPTIONS), tokenCyclerOptions);
  const cycler = {
    /**
     * Produces true if a refresh job is currently in progress.
     */
    get isRefreshing() {
      return refreshWorker !== null;
    },
    /**
     * Produces true if the cycler SHOULD refresh (we are within the refresh
     * window and not already refreshing)
     */
    get shouldRefresh() {
      var _a3;
      return !cycler.isRefreshing && ((_a3 = token === null || token === void 0 ? void 0 : token.expiresOnTimestamp) !== null && _a3 !== void 0 ? _a3 : 0) - options.refreshWindowInMs < Date.now();
    },
    /**
     * Produces true if the cycler MUST refresh (null or nearly-expired
     * token).
     */
    get mustRefresh() {
      return token === null || token.expiresOnTimestamp - options.forcedRefreshWindowInMs < Date.now();
    }
  };
  function refresh(scopes, getTokenOptions) {
    var _a3;
    if (!cycler.isRefreshing) {
      const tryGetAccessToken = () => credential.getToken(scopes, getTokenOptions);
      refreshWorker = beginRefresh(
        tryGetAccessToken,
        options.retryIntervalInMs,
        // If we don't have a token, then we should timeout immediately
        (_a3 = token === null || token === void 0 ? void 0 : token.expiresOnTimestamp) !== null && _a3 !== void 0 ? _a3 : Date.now()
      ).then((_token) => {
        refreshWorker = null;
        token = _token;
        tenantId = getTokenOptions.tenantId;
        return token;
      }).catch((reason) => {
        refreshWorker = null;
        token = null;
        tenantId = void 0;
        throw reason;
      });
    }
    return refreshWorker;
  }
  return (scopes, tokenOptions) => __async(this, null, function* () {
    const mustRefresh = tenantId !== tokenOptions.tenantId || Boolean(tokenOptions.claims) || cycler.mustRefresh;
    if (mustRefresh)
      return refresh(scopes, tokenOptions);
    if (cycler.shouldRefresh) {
      refresh(scopes, tokenOptions);
    }
    return token;
  });
}

// node_modules/@azure/core-rest-pipeline/dist/browser/policies/bearerTokenAuthenticationPolicy.js
var bearerTokenAuthenticationPolicyName = "bearerTokenAuthenticationPolicy";
function defaultAuthorizeRequest(options) {
  return __async(this, null, function* () {
    const { scopes, getAccessToken, request } = options;
    const getTokenOptions = {
      abortSignal: request.abortSignal,
      tracingOptions: request.tracingOptions
    };
    const accessToken = yield getAccessToken(scopes, getTokenOptions);
    if (accessToken) {
      options.request.headers.set("Authorization", `Bearer ${accessToken.token}`);
    }
  });
}
function getChallenge(response) {
  const challenge = response.headers.get("WWW-Authenticate");
  if (response.status === 401 && challenge) {
    return challenge;
  }
  return;
}
function bearerTokenAuthenticationPolicy(options) {
  var _a3;
  const { credential, scopes, challengeCallbacks } = options;
  const logger3 = options.logger || logger;
  const callbacks = Object.assign({ authorizeRequest: (_a3 = challengeCallbacks === null || challengeCallbacks === void 0 ? void 0 : challengeCallbacks.authorizeRequest) !== null && _a3 !== void 0 ? _a3 : defaultAuthorizeRequest, authorizeRequestOnChallenge: challengeCallbacks === null || challengeCallbacks === void 0 ? void 0 : challengeCallbacks.authorizeRequestOnChallenge }, challengeCallbacks);
  const getAccessToken = credential ? createTokenCycler(
    credential
    /* , options */
  ) : () => Promise.resolve(null);
  return {
    name: bearerTokenAuthenticationPolicyName,
    /**
     * If there's no challenge parameter:
     * - It will try to retrieve the token using the cache, or the credential's getToken.
     * - Then it will try the next policy with or without the retrieved token.
     *
     * It uses the challenge parameters to:
     * - Skip a first attempt to get the token from the credential if there's no cached token,
     *   since it expects the token to be retrievable only after the challenge.
     * - Prepare the outgoing request if the `prepareRequest` method has been provided.
     * - Send an initial request to receive the challenge if it fails.
     * - Process a challenge if the response contains it.
     * - Retrieve a token with the challenge information, then re-send the request.
     */
    sendRequest(request, next) {
      return __async(this, null, function* () {
        if (!request.url.toLowerCase().startsWith("https://")) {
          throw new Error("Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.");
        }
        yield callbacks.authorizeRequest({
          scopes: Array.isArray(scopes) ? scopes : [scopes],
          request,
          getAccessToken,
          logger: logger3
        });
        let response;
        let error;
        try {
          response = yield next(request);
        } catch (err) {
          error = err;
          response = err.response;
        }
        if (callbacks.authorizeRequestOnChallenge && (response === null || response === void 0 ? void 0 : response.status) === 401 && getChallenge(response)) {
          const shouldSendRequest = yield callbacks.authorizeRequestOnChallenge({
            scopes: Array.isArray(scopes) ? scopes : [scopes],
            request,
            response,
            getAccessToken,
            logger: logger3
          });
          if (shouldSendRequest) {
            return next(request);
          }
        }
        if (error) {
          throw error;
        } else {
          return response;
        }
      });
    }
  };
}

// node_modules/@azure-rest/core-client/dist/browser/apiVersionPolicy.js
var apiVersionPolicyName = "ApiVersionPolicy";
function apiVersionPolicy(options) {
  return {
    name: apiVersionPolicyName,
    sendRequest: (req, next) => {
      const url = new URL(req.url);
      if (!url.searchParams.get("api-version") && options.apiVersion) {
        req.url = `${req.url}${Array.from(url.searchParams.keys()).length > 0 ? "&" : "?"}api-version=${options.apiVersion}`;
      }
      return next(req);
    }
  };
}

// node_modules/@azure-rest/core-client/dist/browser/keyCredentialAuthenticationPolicy.js
var keyCredentialAuthenticationPolicyName = "keyCredentialAuthenticationPolicy";
function keyCredentialAuthenticationPolicy(credential, apiKeyHeaderName) {
  return {
    name: keyCredentialAuthenticationPolicyName,
    sendRequest(request, next) {
      return __async(this, null, function* () {
        request.headers.set(apiKeyHeaderName, credential.key);
        return next(request);
      });
    }
  };
}

// node_modules/@azure-rest/core-client/dist/browser/clientHelpers.js
var cachedHttpClient;
function addCredentialPipelinePolicy(pipeline, endpoint, options = {}) {
  var _a3, _b2, _c2, _d2;
  const { credential, clientOptions } = options;
  if (!credential) {
    return;
  }
  if (isTokenCredential(credential)) {
    const tokenPolicy = bearerTokenAuthenticationPolicy({
      credential,
      scopes: (_b2 = (_a3 = clientOptions === null || clientOptions === void 0 ? void 0 : clientOptions.credentials) === null || _a3 === void 0 ? void 0 : _a3.scopes) !== null && _b2 !== void 0 ? _b2 : `${endpoint}/.default`
    });
    pipeline.addPolicy(tokenPolicy);
  } else if (isKeyCredential2(credential)) {
    if (!((_c2 = clientOptions === null || clientOptions === void 0 ? void 0 : clientOptions.credentials) === null || _c2 === void 0 ? void 0 : _c2.apiKeyHeaderName)) {
      throw new Error(`Missing API Key Header Name`);
    }
    const keyPolicy = keyCredentialAuthenticationPolicy(credential, (_d2 = clientOptions === null || clientOptions === void 0 ? void 0 : clientOptions.credentials) === null || _d2 === void 0 ? void 0 : _d2.apiKeyHeaderName);
    pipeline.addPolicy(keyPolicy);
  }
}
function createDefaultPipeline(endpoint, credential, options = {}) {
  const pipeline = createPipelineFromOptions(options);
  pipeline.addPolicy(apiVersionPolicy(options));
  addCredentialPipelinePolicy(pipeline, endpoint, { credential, clientOptions: options });
  return pipeline;
}
function isKeyCredential2(credential) {
  return credential.key !== void 0;
}
function getCachedDefaultHttpsClient() {
  if (!cachedHttpClient) {
    cachedHttpClient = createDefaultHttpClient();
  }
  return cachedHttpClient;
}

// node_modules/@azure-rest/core-client/dist/browser/operationOptionHelpers.js
function operationOptionsToRequestParameters(options) {
  var _a3, _b2, _c2, _d2, _e, _f;
  return {
    allowInsecureConnection: (_a3 = options.requestOptions) === null || _a3 === void 0 ? void 0 : _a3.allowInsecureConnection,
    timeout: (_b2 = options.requestOptions) === null || _b2 === void 0 ? void 0 : _b2.timeout,
    skipUrlEncoding: (_c2 = options.requestOptions) === null || _c2 === void 0 ? void 0 : _c2.skipUrlEncoding,
    abortSignal: options.abortSignal,
    onUploadProgress: (_d2 = options.requestOptions) === null || _d2 === void 0 ? void 0 : _d2.onUploadProgress,
    onDownloadProgress: (_e = options.requestOptions) === null || _e === void 0 ? void 0 : _e.onDownloadProgress,
    tracingOptions: options.tracingOptions,
    headers: Object.assign({}, (_f = options.requestOptions) === null || _f === void 0 ? void 0 : _f.headers),
    onResponse: options.onResponse
  };
}

// node_modules/@azure-rest/core-client/dist/browser/helpers/isReadableStream.js
function isReadableStream(body) {
  return Boolean(body && typeof body.getReader === "function" && typeof body.tee === "function");
}

// node_modules/@azure-rest/core-client/dist/browser/sendRequest.js
function sendRequest(_0, _1, _2) {
  return __async(this, arguments, function* (method, url, pipeline, options = {}, customHttpClient) {
    var _a3;
    const httpClient = customHttpClient !== null && customHttpClient !== void 0 ? customHttpClient : getCachedDefaultHttpsClient();
    const request = buildPipelineRequest(method, url, options);
    const response = yield pipeline.sendRequest(httpClient, request);
    const headers = response.headers.toJSON();
    const stream = (_a3 = response.readableStreamBody) !== null && _a3 !== void 0 ? _a3 : response.browserStreamBody;
    const parsedBody = options.responseAsStream || stream !== void 0 ? void 0 : getResponseBody(response);
    const body = stream !== null && stream !== void 0 ? stream : parsedBody;
    if (options === null || options === void 0 ? void 0 : options.onResponse) {
      options.onResponse(Object.assign(Object.assign({}, response), { request, rawHeaders: headers, parsedBody }));
    }
    return {
      request,
      headers,
      status: `${response.status}`,
      body
    };
  });
}
function getRequestContentType(options = {}) {
  var _a3, _b2, _c2;
  return (_c2 = (_a3 = options.contentType) !== null && _a3 !== void 0 ? _a3 : (_b2 = options.headers) === null || _b2 === void 0 ? void 0 : _b2["content-type"]) !== null && _c2 !== void 0 ? _c2 : getContentType(options.body);
}
function getContentType(body) {
  if (ArrayBuffer.isView(body)) {
    return "application/octet-stream";
  }
  if (typeof body === "string") {
    try {
      JSON.parse(body);
      return "application/json; charset=UTF-8";
    } catch (error) {
      return void 0;
    }
  }
  return "application/json; charset=UTF-8";
}
function buildPipelineRequest(method, url, options = {}) {
  var _a3, _b2, _c2;
  const requestContentType = getRequestContentType(options);
  const { body, formData } = getRequestBody(options.body, requestContentType);
  const hasContent = body !== void 0 || formData !== void 0;
  const headers = createHttpHeaders(Object.assign(Object.assign(Object.assign({}, options.headers ? options.headers : {}), { accept: (_c2 = (_a3 = options.accept) !== null && _a3 !== void 0 ? _a3 : (_b2 = options.headers) === null || _b2 === void 0 ? void 0 : _b2.accept) !== null && _c2 !== void 0 ? _c2 : "application/json" }), hasContent && requestContentType && {
    "content-type": requestContentType
  }));
  return createPipelineRequest({
    url,
    method,
    body,
    formData,
    headers,
    allowInsecureConnection: options.allowInsecureConnection,
    tracingOptions: options.tracingOptions,
    abortSignal: options.abortSignal,
    onUploadProgress: options.onUploadProgress,
    onDownloadProgress: options.onDownloadProgress,
    timeout: options.timeout,
    enableBrowserStreams: true,
    streamResponseStatusCodes: options.responseAsStream ? /* @__PURE__ */ new Set([Number.POSITIVE_INFINITY]) : void 0
  });
}
function getRequestBody(body, contentType = "") {
  if (body === void 0) {
    return { body: void 0 };
  }
  if (isReadableStream(body)) {
    return { body };
  }
  const firstType = contentType.split(";")[0];
  if (firstType === "application/json") {
    return { body: JSON.stringify(body) };
  }
  if (ArrayBuffer.isView(body)) {
    return { body: body instanceof Uint8Array ? body : JSON.stringify(body) };
  }
  switch (firstType) {
    case "multipart/form-data":
      return isRLCFormDataInput(body) ? { formData: processFormData(body) } : { body: JSON.stringify(body) };
    case "text/plain":
      return { body: String(body) };
    default:
      if (typeof body === "string") {
        return { body };
      }
      return { body: JSON.stringify(body) };
  }
}
function isRLCFormDataValue(value) {
  return typeof value === "string" || value instanceof Uint8Array || // We don't do `instanceof Blob` since we should also accept polyfills of e.g. File in Node.
  typeof value.stream === "function";
}
function isRLCFormDataInput(body) {
  return body !== void 0 && body instanceof Object && Object.values(body).every((value) => isRLCFormDataValue(value) || Array.isArray(value) && value.every(isRLCFormDataValue));
}
function processFormDataValue(value) {
  return value instanceof Uint8Array ? createFile(value, "blob") : value;
}
function processFormData(formData) {
  const processedFormData = {};
  for (const element in formData) {
    const value = formData[element];
    processedFormData[element] = Array.isArray(value) ? value.map(processFormDataValue) : processFormDataValue(value);
  }
  return processedFormData;
}
function getResponseBody(response) {
  var _a3, _b2;
  const contentType = (_a3 = response.headers.get("content-type")) !== null && _a3 !== void 0 ? _a3 : "";
  const firstType = contentType.split(";")[0];
  const bodyToParse = (_b2 = response.bodyAsText) !== null && _b2 !== void 0 ? _b2 : "";
  if (firstType === "text/plain") {
    return String(bodyToParse);
  }
  try {
    return bodyToParse ? JSON.parse(bodyToParse) : void 0;
  } catch (error) {
    if (firstType === "application/json") {
      throw createParseError(response, error);
    }
    return String(bodyToParse);
  }
}
function createParseError(response, err) {
  var _a3;
  const msg = `Error "${err}" occurred while parsing the response body - ${response.bodyAsText}.`;
  const errCode = (_a3 = err.code) !== null && _a3 !== void 0 ? _a3 : RestError.PARSE_ERROR;
  return new RestError(msg, {
    code: errCode,
    statusCode: response.status,
    request: response.request,
    response
  });
}

// node_modules/@azure-rest/core-client/dist/browser/urlHelpers.js
function buildRequestUrl(endpoint, routePath, pathParameters, options = {}) {
  if (routePath.startsWith("https://") || routePath.startsWith("http://")) {
    return routePath;
  }
  endpoint = buildBaseUrl(endpoint, options);
  routePath = buildRoutePath(routePath, pathParameters, options);
  const requestUrl = appendQueryParams(`${endpoint}/${routePath}`, options);
  const url = new URL(requestUrl);
  return url.toString().replace(/([^:]\/)\/+/g, "$1");
}
function appendQueryParams(url, options = {}) {
  if (!options.queryParameters) {
    return url;
  }
  let parsedUrl = new URL(url);
  const queryParams = options.queryParameters;
  for (const key of Object.keys(queryParams)) {
    const param = queryParams[key];
    if (param === void 0 || param === null) {
      continue;
    }
    if (!param.toString || typeof param.toString !== "function") {
      throw new Error(`Query parameters must be able to be represented as string, ${key} can't`);
    }
    const value = param.toISOString !== void 0 ? param.toISOString() : param.toString();
    parsedUrl.searchParams.append(key, value);
  }
  if (options.skipUrlEncoding) {
    parsedUrl = skipQueryParameterEncoding(parsedUrl);
  }
  return parsedUrl.toString();
}
function skipQueryParameterEncoding(url) {
  if (!url) {
    return url;
  }
  const searchPieces = [];
  for (const [name, value] of url.searchParams) {
    searchPieces.push(`${name}=${value}`);
  }
  url.search = searchPieces.length ? `?${searchPieces.join("&")}` : "";
  return url;
}
function buildBaseUrl(endpoint, options) {
  var _a3;
  if (!options.pathParameters) {
    return endpoint;
  }
  const pathParams = options.pathParameters;
  for (const [key, param] of Object.entries(pathParams)) {
    if (param === void 0 || param === null) {
      throw new Error(`Path parameters ${key} must not be undefined or null`);
    }
    if (!param.toString || typeof param.toString !== "function") {
      throw new Error(`Path parameters must be able to be represented as string, ${key} can't`);
    }
    let value = param.toISOString !== void 0 ? param.toISOString() : String(param);
    if (!options.skipUrlEncoding) {
      value = encodeURIComponent(param);
    }
    endpoint = (_a3 = replaceAll(endpoint, `{${key}}`, value)) !== null && _a3 !== void 0 ? _a3 : "";
  }
  return endpoint;
}
function buildRoutePath(routePath, pathParameters, options = {}) {
  for (const pathParam of pathParameters) {
    let value = pathParam;
    if (!options.skipUrlEncoding) {
      value = encodeURIComponent(pathParam);
    }
    routePath = routePath.replace(/\{\w+\}/, value);
  }
  return routePath;
}
function replaceAll(value, searchValue, replaceValue) {
  return !value || !searchValue ? value : value.split(searchValue).join(replaceValue || "");
}

// node_modules/@azure-rest/core-client/dist/browser/getClient.js
function getClient(endpoint, credentialsOrPipelineOptions, clientOptions = {}) {
  var _a3, _b2;
  let credentials;
  if (credentialsOrPipelineOptions) {
    if (isCredential(credentialsOrPipelineOptions)) {
      credentials = credentialsOrPipelineOptions;
    } else {
      clientOptions = credentialsOrPipelineOptions !== null && credentialsOrPipelineOptions !== void 0 ? credentialsOrPipelineOptions : {};
    }
  }
  const pipeline = createDefaultPipeline(endpoint, credentials, clientOptions);
  if ((_a3 = clientOptions.additionalPolicies) === null || _a3 === void 0 ? void 0 : _a3.length) {
    for (const { policy, position } of clientOptions.additionalPolicies) {
      const afterPhase = position === "perRetry" ? "Sign" : void 0;
      pipeline.addPolicy(policy, {
        afterPhase
      });
    }
  }
  const { allowInsecureConnection, httpClient } = clientOptions;
  const endpointUrl = (_b2 = clientOptions.endpoint) !== null && _b2 !== void 0 ? _b2 : endpoint;
  const client = (path, ...args) => {
    const getUrl = (requestOptions) => buildRequestUrl(endpointUrl, path, args, Object.assign({ allowInsecureConnection }, requestOptions));
    return {
      get: (requestOptions = {}) => {
        return buildOperation("GET", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
      },
      post: (requestOptions = {}) => {
        return buildOperation("POST", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
      },
      put: (requestOptions = {}) => {
        return buildOperation("PUT", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
      },
      patch: (requestOptions = {}) => {
        return buildOperation("PATCH", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
      },
      delete: (requestOptions = {}) => {
        return buildOperation("DELETE", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
      },
      head: (requestOptions = {}) => {
        return buildOperation("HEAD", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
      },
      options: (requestOptions = {}) => {
        return buildOperation("OPTIONS", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
      },
      trace: (requestOptions = {}) => {
        return buildOperation("TRACE", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
      }
    };
  };
  return {
    path: client,
    pathUnchecked: client,
    pipeline
  };
}
function buildOperation(method, url, pipeline, options, allowInsecureConnection, httpClient) {
  var _a3;
  allowInsecureConnection = (_a3 = options.allowInsecureConnection) !== null && _a3 !== void 0 ? _a3 : allowInsecureConnection;
  return {
    then: function(onFulfilled, onrejected) {
      return sendRequest(method, url, pipeline, Object.assign(Object.assign({}, options), { allowInsecureConnection }), httpClient).then(onFulfilled, onrejected);
    },
    asBrowserStream() {
      return __async(this, null, function* () {
        return sendRequest(method, url, pipeline, Object.assign(Object.assign({}, options), { allowInsecureConnection, responseAsStream: true }), httpClient);
      });
    },
    asNodeStream() {
      return __async(this, null, function* () {
        return sendRequest(method, url, pipeline, Object.assign(Object.assign({}, options), { allowInsecureConnection, responseAsStream: true }), httpClient);
      });
    }
  };
}
function isCredential(param) {
  if (param.key !== void 0 || isTokenCredential(param)) {
    return true;
  }
  return false;
}

// node_modules/@azure/openai/dist-esm/src/logger.js
var logger2 = createClientLogger("openai");

// node_modules/@azure/openai/dist-esm/src/rest/openAIClient.js
function createClient(endpoint, credentials, options = {}) {
  var _a3, _b2, _c2, _d2, _e, _f, _g, _h;
  const baseUrl = (_a3 = options.baseUrl) !== null && _a3 !== void 0 ? _a3 : `${endpoint}/openai`;
  options.apiVersion = (_b2 = options.apiVersion) !== null && _b2 !== void 0 ? _b2 : "2024-03-01-preview";
  const userAgentInfo = `azsdk-js-openai-rest/1.0.0-beta.12`;
  const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}` : `${userAgentInfo}`;
  options = Object.assign(Object.assign({}, options), { userAgentOptions: {
    userAgentPrefix
  }, loggingOptions: {
    logger: (_d2 = (_c2 = options.loggingOptions) === null || _c2 === void 0 ? void 0 : _c2.logger) !== null && _d2 !== void 0 ? _d2 : logger2.info
  }, credentials: {
    scopes: (_f = (_e = options.credentials) === null || _e === void 0 ? void 0 : _e.scopes) !== null && _f !== void 0 ? _f : ["https://cognitiveservices.azure.com/.default"],
    apiKeyHeaderName: (_h = (_g = options.credentials) === null || _g === void 0 ? void 0 : _g.apiKeyHeaderName) !== null && _h !== void 0 ? _h : "api-key"
  } });
  const client = getClient(baseUrl, credentials, options);
  return client;
}

// node_modules/@azure/openai/dist-esm/src/rest/isUnexpected.js
var responseMap = {
  "POST /deployments/{deploymentId}/audio/transcriptions": ["200"],
  "POST /deployments/{deploymentId}/audio/translations": ["200"],
  "POST /deployments/{deploymentId}/completions": ["200"],
  "POST /deployments/{deploymentId}/chat/completions": ["200"],
  "POST /deployments/{deploymentId}/images/generations": ["200"],
  "POST /deployments/{deploymentId}/embeddings": ["200"],
  "GET /operations/images/{operationId}": ["200"],
  "POST /images/generations:submit": ["202"],
  "GET /images/generations:submit": ["200", "202"]
};
function isUnexpected(response) {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal !== null && lroOriginal !== void 0 ? lroOriginal : response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}
function getParametrizedPathSuccess(method, path) {
  var _a3, _b2, _c2, _d2;
  const pathParts = path.split("/");
  let matchedLen = -1, matchedValue = [];
  for (const [key, value] of Object.entries(responseMap)) {
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    const candidateParts = candidatePath.split("/");
    let found = true;
    for (let i = candidateParts.length - 1, j = pathParts.length - 1; i >= 1 && j >= 1; i--, j--) {
      if (((_a3 = candidateParts[i]) === null || _a3 === void 0 ? void 0 : _a3.startsWith("{")) && ((_b2 = candidateParts[i]) === null || _b2 === void 0 ? void 0 : _b2.indexOf("}")) !== -1) {
        const start = candidateParts[i].indexOf("}") + 1, end = (_c2 = candidateParts[i]) === null || _c2 === void 0 ? void 0 : _c2.length;
        const isMatched = new RegExp(`${(_d2 = candidateParts[i]) === null || _d2 === void 0 ? void 0 : _d2.slice(start, end)}`).test(pathParts[j] || "");
        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }
  return matchedValue;
}
function getPathFromMapKey(mapKey) {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}

// node_modules/@azure/openai/dist-esm/src/rest/index.js
var rest_default = createClient;

// node_modules/@azure/openai/dist-esm/src/api/OpenAIContext.js
function createOpenAI(endpoint, credential, options = {}) {
  const clientContext = rest_default(endpoint, credential, options);
  return clientContext;
}

// node_modules/@azure/openai/dist-esm/src/api/util.js
function wrapError(f, message) {
  try {
    const result = f();
    return result;
  } catch (cause) {
    throw new Error(`${message}: ${cause}`, { cause });
  }
}
function camelCaseKeys(obj) {
  if (typeof obj !== "object" || !obj)
    return obj;
  if (Array.isArray(obj)) {
    return obj.map((v) => camelCaseKeys(v));
  } else {
    for (const key of Object.keys(obj)) {
      const value = obj[key];
      const newKey = tocamelCase(key);
      if (newKey !== key) {
        delete obj[key];
      }
      obj[newKey] = typeof obj[newKey] === "object" ? camelCaseKeys(value) : value;
    }
    return obj;
  }
}
function snakeCaseKeys(obj) {
  if (typeof obj !== "object" || !obj)
    return obj;
  if (Array.isArray(obj)) {
    return obj.map((v) => snakeCaseKeys(v));
  } else {
    for (const key of Object.keys(obj)) {
      const value = obj[key];
      const newKey = toSnakeCase(key);
      if (newKey !== key) {
        delete obj[key];
      }
      obj[newKey] = typeof obj[newKey] === "object" ? snakeCaseKeys(value) : value;
    }
    return obj;
  }
}
function tocamelCase(str) {
  return str.toLowerCase().replace(/([_][a-z])/g, (group) => group.toUpperCase().replace("_", ""));
}
function toSnakeCase(str) {
  return str.replace(/([A-Z])/g, (group) => `_${group.toLowerCase()}`).replace(/^_/, "");
}

// node_modules/@azure/openai/dist-esm/src/utils/serializeUtil.js
function serializeChatRequestUserMessage(obj) {
  return {
    role: obj["role"],
    content: typeof obj["content"] === "string" ? obj["content"] : obj["content"].map(serializeChatRequestContentItemUnion),
    name: obj["name"]
  };
}
function serializeChatRequestContentItemUnion(obj) {
  switch (obj.type) {
    case "image_url":
      return serializeChatMessageImageContentItem(obj);
    default:
      return obj;
  }
}
function serializeChatRequestAssistantMessage(obj) {
  if (obj.content === void 0) {
    obj.content = null;
  }
  const { functionCall, toolCalls } = obj, rest = __rest(obj, ["functionCall", "toolCalls"]);
  return Object.assign(Object.assign(Object.assign({}, snakeCaseKeys(rest)), !toolCalls || toolCalls.length === 0 ? {} : { tool_calls: toolCalls }), functionCall ? { function_call: functionCall } : {});
}
function serializeChatRequestToolMessage(obj) {
  return {
    role: obj["role"],
    content: obj["content"],
    tool_call_id: obj["toolCallId"]
  };
}
function serializeChatRequestMessageUnion(obj) {
  switch (obj.role) {
    case "user":
      return serializeChatRequestUserMessage(obj);
    case "assistant":
      return serializeChatRequestAssistantMessage(obj);
    case "tool":
      return serializeChatRequestToolMessage(obj);
    default:
      return obj;
  }
}
function serializeChatMessageImageContentItem(obj) {
  return {
    type: obj["type"],
    image_url: { url: obj.imageUrl["url"], detail: obj.imageUrl["detail"] }
  };
}
function serializeAzureSearchChatExtensionConfiguration(obj) {
  var _a3, _b2, _c2, _d2, _e, _f, _g;
  return {
    type: obj["type"],
    parameters: {
      authentication: !obj.authentication ? obj.authentication : serializeOnYourDataAuthenticationOptionsUnion(obj.authentication),
      top_n_documents: obj["topNDocuments"],
      in_scope: obj["inScope"],
      strictness: obj["strictness"],
      role_information: obj["roleInformation"],
      endpoint: obj["endpoint"],
      index_name: obj["indexName"],
      fields_mapping: !obj.fieldsMapping ? void 0 : {
        title_field: (_a3 = obj.fieldsMapping) === null || _a3 === void 0 ? void 0 : _a3["titleField"],
        url_field: (_b2 = obj.fieldsMapping) === null || _b2 === void 0 ? void 0 : _b2["urlField"],
        filepath_field: (_c2 = obj.fieldsMapping) === null || _c2 === void 0 ? void 0 : _c2["filepathField"],
        content_fields: (_d2 = obj.fieldsMapping) === null || _d2 === void 0 ? void 0 : _d2["contentFields"],
        content_fields_separator: (_e = obj.fieldsMapping) === null || _e === void 0 ? void 0 : _e["contentFieldsSeparator"],
        vector_fields: (_f = obj.fieldsMapping) === null || _f === void 0 ? void 0 : _f["vectorFields"],
        image_vector_fields: (_g = obj.fieldsMapping) === null || _g === void 0 ? void 0 : _g["imageVectorFields"]
      },
      query_type: obj["queryType"],
      semantic_configuration: obj["semanticConfiguration"],
      filter: obj["filter"],
      embedding_dependency: !obj.embeddingDependency ? obj.embeddingDependency : serializeOnYourDataVectorizationSourceUnion(obj.embeddingDependency)
    }
  };
}
function serializeAzureMachineLearningIndexChatExtensionConfiguration(obj) {
  return {
    type: obj["type"],
    parameters: {
      authentication: !obj.authentication ? obj.authentication : serializeOnYourDataAuthenticationOptionsUnion(obj.authentication),
      top_n_documents: obj["topNDocuments"],
      in_scope: obj["inScope"],
      strictness: obj["strictness"],
      role_information: obj["roleInformation"],
      project_resource_id: obj["projectResourceId"],
      name: obj["name"],
      version: obj["version"],
      filter: obj["filter"]
    }
  };
}
function serializeAzureCosmosDBChatExtensionConfiguration(obj) {
  return {
    type: obj["type"],
    parameters: {
      authentication: !obj.authentication ? obj.authentication : serializeOnYourDataAuthenticationOptionsUnion(obj.authentication),
      top_n_documents: obj["topNDocuments"],
      in_scope: obj["inScope"],
      strictness: obj["strictness"],
      role_information: obj["roleInformation"],
      database_name: obj["databaseName"],
      container_name: obj["containerName"],
      index_name: obj["indexName"],
      fields_mapping: {
        title_field: obj.fieldsMapping["titleField"],
        url_field: obj.fieldsMapping["urlField"],
        filepath_field: obj.fieldsMapping["filepathField"],
        content_fields: obj.fieldsMapping["contentFields"],
        content_fields_separator: obj.fieldsMapping["contentFieldsSeparator"],
        vector_fields: obj.fieldsMapping["vectorFields"]
      },
      embedding_dependency: serializeOnYourDataVectorizationSourceUnion(obj.embeddingDependency)
    }
  };
}
function serializeElasticsearchChatExtensionConfiguration(obj) {
  var _a3, _b2, _c2, _d2, _e, _f;
  return {
    type: obj["type"],
    parameters: {
      authentication: !obj.authentication ? obj.authentication : serializeOnYourDataAuthenticationOptionsUnion(obj.authentication),
      top_n_documents: obj["topNDocuments"],
      in_scope: obj["inScope"],
      strictness: obj["strictness"],
      role_information: obj["roleInformation"],
      endpoint: obj["endpoint"],
      index_name: obj["indexName"],
      fields_mapping: !obj.fieldsMapping ? void 0 : {
        title_field: (_a3 = obj.fieldsMapping) === null || _a3 === void 0 ? void 0 : _a3["titleField"],
        url_field: (_b2 = obj.fieldsMapping) === null || _b2 === void 0 ? void 0 : _b2["urlField"],
        filepath_field: (_c2 = obj.fieldsMapping) === null || _c2 === void 0 ? void 0 : _c2["filepathField"],
        content_fields: (_d2 = obj.fieldsMapping) === null || _d2 === void 0 ? void 0 : _d2["contentFields"],
        content_fields_separator: (_e = obj.fieldsMapping) === null || _e === void 0 ? void 0 : _e["contentFieldsSeparator"],
        vector_fields: (_f = obj.fieldsMapping) === null || _f === void 0 ? void 0 : _f["vectorFields"]
      },
      query_type: obj["queryType"],
      embedding_dependency: !obj.embeddingDependency ? obj.embeddingDependency : serializeOnYourDataVectorizationSourceUnion(obj.embeddingDependency)
    }
  };
}
function serializePineconeChatExtensionConfiguration(obj) {
  return {
    type: obj["type"],
    parameters: {
      authentication: !obj.authentication ? obj.authentication : serializeOnYourDataAuthenticationOptionsUnion(obj.authentication),
      top_n_documents: obj["topNDocuments"],
      in_scope: obj["inScope"],
      strictness: obj["strictness"],
      role_information: obj["roleInformation"],
      environment: obj["environment"],
      index_name: obj["indexName"],
      fields_mapping: {
        title_field: obj.fieldsMapping["titleField"],
        url_field: obj.fieldsMapping["urlField"],
        filepath_field: obj.fieldsMapping["filepathField"],
        content_fields: obj.fieldsMapping["contentFields"],
        content_fields_separator: obj.fieldsMapping["contentFieldsSeparator"]
      },
      embedding_dependency: serializeOnYourDataVectorizationSourceUnion(obj.embeddingDependency)
    }
  };
}
function serializeAzureChatExtensionConfigurationUnion(obj) {
  switch (obj.type) {
    case "azure_search":
      return serializeAzureSearchChatExtensionConfiguration(obj);
    case "azure_ml_index":
      return serializeAzureMachineLearningIndexChatExtensionConfiguration(obj);
    case "azure_cosmos_db":
      return serializeAzureCosmosDBChatExtensionConfiguration(obj);
    case "elasticsearch":
      return serializeElasticsearchChatExtensionConfiguration(obj);
    case "pinecone":
      return serializePineconeChatExtensionConfiguration(obj);
    default:
      return obj;
  }
}
function serializeOnYourDataConnectionStringAuthenticationOptions(obj) {
  return { type: obj["type"], connection_string: obj["connectionString"] };
}
function serializeOnYourDataKeyAndKeyIdAuthenticationOptions(obj) {
  return { type: obj["type"], key: obj["key"], key_id: obj["keyId"] };
}
function serializeOnYourDataEncodedApiKeyAuthenticationOptions(obj) {
  return { type: obj["type"], encoded_api_key: obj["encodedApiKey"] };
}
function serializeOnYourDataAccessTokenAuthenticationOptions(obj) {
  return { type: obj["type"], access_token: obj["accessToken"] };
}
function serializeOnYourDataUserAssignedManagedIdentityAuthenticationOptions(obj) {
  return {
    type: obj["type"],
    managed_identity_resource_id: obj["managedIdentityResourceId"]
  };
}
function serializeOnYourDataAuthenticationOptionsUnion(obj) {
  switch (obj.type) {
    case "connection_string":
      return serializeOnYourDataConnectionStringAuthenticationOptions(obj);
    case "key_and_key_id":
      return serializeOnYourDataKeyAndKeyIdAuthenticationOptions(obj);
    case "encoded_api_key":
      return serializeOnYourDataEncodedApiKeyAuthenticationOptions(obj);
    case "access_token":
      return serializeOnYourDataAccessTokenAuthenticationOptions(obj);
    case "user_assigned_managed_identity":
      return serializeOnYourDataUserAssignedManagedIdentityAuthenticationOptions(obj);
    default:
      return obj;
  }
}
function serializeOnYourDataEndpointVectorizationSource(obj) {
  return {
    type: obj["type"],
    endpoint: obj["endpoint"],
    authentication: serializeOnYourDataAuthenticationOptionsUnion(obj.authentication)
  };
}
function serializeOnYourDataDeploymentNameVectorizationSource(obj) {
  return { type: obj["type"], deployment_name: obj["deploymentName"] };
}
function serializeOnYourDataModelIdVectorizationSource(obj) {
  return { type: obj["type"], model_id: obj["modelId"] };
}
function serializeOnYourDataVectorizationSourceUnion(obj) {
  switch (obj.type) {
    case "endpoint":
      return serializeOnYourDataEndpointVectorizationSource(obj);
    case "deployment_name":
      return serializeOnYourDataDeploymentNameVectorizationSource(obj);
    case "model_id":
      return serializeOnYourDataModelIdVectorizationSource(obj);
    default:
      return obj;
  }
}

// node_modules/@azure/openai/dist-esm/src/api/readableStreamUtils.js
function polyfillStream(stream) {
  makeAsyncIterable(stream);
  return stream;
}
function makeAsyncIterable(webStream) {
  if (!webStream[Symbol.asyncIterator]) {
    webStream[Symbol.asyncIterator] = () => toAsyncIterable(webStream);
  }
  if (!webStream.values) {
    webStream.values = () => toAsyncIterable(webStream);
  }
}
function toAsyncIterable(stream) {
  return __asyncGenerator(this, arguments, function* toAsyncIterable_1() {
    const reader = stream.getReader();
    try {
      while (true) {
        const { value, done } = yield __await(reader.read());
        if (done) {
          return yield __await(void 0);
        }
        yield yield __await(value);
      }
    } finally {
      const cancelPromise = reader.cancel();
      reader.releaseLock();
      yield __await(cancelPromise);
    }
  });
}
function streamToText(stream) {
  return __async(this, null, function* () {
    const reader = stream.getReader();
    const buffers = [];
    let length = 0;
    try {
      while (true) {
        const { value, done } = yield reader.read();
        if (done) {
          return new TextDecoder().decode(concatBuffers(buffers, length));
        }
        length += value.length;
        buffers.push(value);
      }
    } finally {
      reader.releaseLock();
    }
  });
}
function getBuffersLength(buffers) {
  return buffers.reduce((acc, curr) => acc + curr.length, 0);
}
function concatBuffers(buffers, len) {
  const length = len !== null && len !== void 0 ? len : getBuffersLength(buffers);
  const res = new Uint8Array(length);
  for (let i = 0, pos = 0; i < buffers.length; i++) {
    const buffer = buffers[i];
    res.set(buffer, pos);
    pos += buffer.length;
  }
  return res;
}

// node_modules/@azure/openai/dist-esm/src/api/getSSEs.browser.js
function getStream(response) {
  return __async(this, null, function* () {
    const { body, status } = yield response.asBrowserStream();
    if (status !== "200" && body !== void 0) {
      const text = yield streamToText(body);
      throw wrapError(() => JSON.parse(text).error, "Error parsing response body");
    }
    if (!body)
      throw new Error("No stream found in response. Did you enable the stream option?");
    return body;
  });
}

// node_modules/@azure/core-sse/dist/browser/utils.js
function createStream(asyncIter, cancel) {
  const stream = iteratorToStream(asyncIter, cancel);
  return polyfillStream2(stream, cancel);
}
function polyfillStream2(stream, dispose) {
  makeAsyncIterable2(stream);
  makeAsyncDisposable(stream, dispose);
  return stream;
}
function makeAsyncDisposable(webStream, dispose) {
  var _a3;
  (_a3 = Symbol.asyncDispose) !== null && _a3 !== void 0 ? _a3 : Symbol.asyncDispose = Symbol("Symbol.asyncDispose");
  if (!webStream[Symbol.asyncDispose]) {
    webStream[Symbol.asyncDispose] = () => dispose();
  }
}
function makeAsyncIterable2(webStream) {
  if (!webStream[Symbol.asyncIterator]) {
    webStream[Symbol.asyncIterator] = () => toAsyncIterable2(webStream);
  }
  if (!webStream.values) {
    webStream.values = () => toAsyncIterable2(webStream);
  }
}
function iteratorToStream(iterator, cancel) {
  return new ReadableStream({
    pull(controller) {
      return __async(this, null, function* () {
        const { value, done } = yield iterator.next();
        if (done) {
          controller.close();
        } else {
          controller.enqueue(value);
        }
      });
    },
    cancel
  });
}
function ensureAsyncIterable(stream) {
  if (isReadableStream2(stream)) {
    makeAsyncIterable2(stream);
    return {
      cancel: () => stream.cancel(),
      iterable: stream
    };
  } else {
    return {
      cancel: () => __async(this, null, function* () {
        stream.socket.end();
      }),
      iterable: stream
    };
  }
}
function isReadableStream2(body) {
  return Boolean(body && typeof body.getReader === "function" && typeof body.tee === "function");
}
function toAsyncIterable2(stream) {
  return __asyncGenerator(this, arguments, function* toAsyncIterable_1() {
    const reader = stream.getReader();
    try {
      while (true) {
        const { value, done } = yield __await(reader.read());
        if (done) {
          return yield __await(void 0);
        }
        yield yield __await(value);
      }
    } finally {
      const cancelPromise = reader.cancel();
      reader.releaseLock();
      yield __await(cancelPromise);
    }
  });
}

// node_modules/@azure/core-sse/dist/browser/sse.js
var ControlChars;
(function(ControlChars2) {
  ControlChars2[ControlChars2["NewLine"] = 10] = "NewLine";
  ControlChars2[ControlChars2["CarriageReturn"] = 13] = "CarriageReturn";
  ControlChars2[ControlChars2["Space"] = 32] = "Space";
  ControlChars2[ControlChars2["Colon"] = 58] = "Colon";
})(ControlChars || (ControlChars = {}));
function createSseStream(chunkStream) {
  const { cancel, iterable } = ensureAsyncIterable(chunkStream);
  const asyncIter = toMessage(toLine(iterable));
  return createStream(asyncIter, cancel);
}
function concatBuffer(a, b) {
  const res = new Uint8Array(a.length + b.length);
  res.set(a);
  res.set(b, a.length);
  return res;
}
function createMessage() {
  return {
    data: void 0,
    event: "",
    id: "",
    retry: void 0
  };
}
function toLine(chunkIter) {
  return __asyncGenerator(this, arguments, function* toLine_1() {
    var _a3, e_1, _b2, _c2;
    let buf;
    let bufIdx = 0;
    let fieldLen = -1;
    let discardTrailingNewline = false;
    try {
      for (var _d2 = true, chunkIter_1 = __asyncValues(chunkIter), chunkIter_1_1; chunkIter_1_1 = yield __await(chunkIter_1.next()), _a3 = chunkIter_1_1.done, !_a3; _d2 = true) {
        _c2 = chunkIter_1_1.value;
        _d2 = false;
        const chunk = _c2;
        if (buf === void 0) {
          buf = chunk;
          bufIdx = 0;
          fieldLen = -1;
        } else {
          buf = concatBuffer(buf, chunk);
        }
        const bufLen = buf.length;
        let start = 0;
        while (bufIdx < bufLen) {
          if (discardTrailingNewline) {
            if (buf[bufIdx] === ControlChars.NewLine) {
              start = ++bufIdx;
            }
            discardTrailingNewline = false;
          }
          let end = -1;
          for (; bufIdx < bufLen && end === -1; ++bufIdx) {
            switch (buf[bufIdx]) {
              case ControlChars.Colon:
                if (fieldLen === -1) {
                  fieldLen = bufIdx - start;
                }
                break;
              case ControlChars.CarriageReturn:
                discardTrailingNewline = true;
                end = bufIdx;
                break;
              case ControlChars.NewLine:
                end = bufIdx;
                break;
            }
          }
          if (end === -1) {
            break;
          }
          yield yield __await({ line: buf.subarray(start, end), fieldLen });
          start = bufIdx;
          fieldLen = -1;
        }
        if (start === bufLen) {
          buf = void 0;
        } else if (start !== 0) {
          buf = buf.subarray(start);
          bufIdx -= start;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (!_d2 && !_a3 && (_b2 = chunkIter_1.return))
          yield __await(_b2.call(chunkIter_1));
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  });
}
function toMessage(lineIter) {
  return __asyncGenerator(this, arguments, function* toMessage_1() {
    var _a3, e_2, _b2, _c2;
    let message = createMessage();
    const decoder = new TextDecoder();
    try {
      for (var _d2 = true, lineIter_1 = __asyncValues(lineIter), lineIter_1_1; lineIter_1_1 = yield __await(lineIter_1.next()), _a3 = lineIter_1_1.done, !_a3; _d2 = true) {
        _c2 = lineIter_1_1.value;
        _d2 = false;
        const { line, fieldLen } = _c2;
        if (line.length === 0 && message.data !== void 0) {
          yield yield __await(message);
          message = createMessage();
        } else if (fieldLen > 0) {
          const field = decoder.decode(line.subarray(0, fieldLen));
          const valueOffset = fieldLen + (line[fieldLen + 1] === ControlChars.Space ? 2 : 1);
          const value = decoder.decode(line.subarray(valueOffset));
          switch (field) {
            case "data":
              message.data = message.data ? message.data + "\n" + value : value;
              break;
            case "event":
              message.event = value;
              break;
            case "id":
              message.id = value;
              break;
            case "retry": {
              const retry = parseInt(value, 10);
              if (!isNaN(retry)) {
                message.retry = retry;
              }
              break;
            }
          }
        }
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (!_d2 && !_a3 && (_b2 = lineIter_1.return))
          yield __await(_b2.call(lineIter_1));
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
  });
}

// node_modules/@azure/openai/dist-esm/src/api/oaiSse.js
function getOaiSSEs(response, toEvent) {
  return __async(this, null, function* () {
    const stringStream = yield getStream(response);
    const eventStream = createSseStream(stringStream);
    const jsonParser = new TransformStream({
      transform: (chunk, controller) => __async(this, null, function* () {
        if (chunk.data === "[DONE]") {
          return;
        }
        controller.enqueue(toEvent(wrapError(() => JSON.parse(chunk.data), "Error parsing an event. See 'cause' for more details")));
      })
    });
    return polyfillStream(eventStream.pipeThrough(jsonParser));
  });
}

// node_modules/@azure/openai/dist-esm/src/api/operations.js
function getAudioTranscription(context, deploymentName, fileContent, formatOrOptions, inputOptions) {
  return __async(this, null, function* () {
    const options = inputOptions !== null && inputOptions !== void 0 ? inputOptions : typeof formatOrOptions === "string" ? {} : formatOrOptions !== null && formatOrOptions !== void 0 ? formatOrOptions : {};
    const response_format = typeof formatOrOptions === "string" ? formatOrOptions : void 0;
    const { abortSignal, onResponse, requestOptions, tracingOptions } = options, rest = __rest(options, ["abortSignal", "onResponse", "requestOptions", "tracingOptions"]);
    const { body, status } = yield context.pathUnchecked("deployments/{deploymentName}/audio/transcriptions", deploymentName).post(Object.assign(Object.assign({}, operationOptionsToRequestParameters({
      abortSignal,
      onResponse,
      tracingOptions,
      requestOptions
    })), { contentType: "multipart/form-data", body: Object.assign(Object.assign(Object.assign({}, snakeCaseKeys(rest)), { file: createFile(fileContent, "placeholder.wav") }), response_format ? { response_format } : {}) }));
    if (status !== "200") {
      throw body.error;
    }
    return response_format !== "verbose_json" ? body : camelCaseKeys(body);
  });
}
function getAudioTranslation(context, deploymentName, fileContent, formatOrOptions, inputOptions) {
  return __async(this, null, function* () {
    const options = inputOptions !== null && inputOptions !== void 0 ? inputOptions : typeof formatOrOptions === "string" ? {} : formatOrOptions !== null && formatOrOptions !== void 0 ? formatOrOptions : {};
    const response_format = typeof formatOrOptions === "string" ? formatOrOptions : void 0;
    const { abortSignal, onResponse, requestOptions, tracingOptions } = options, rest = __rest(options, ["abortSignal", "onResponse", "requestOptions", "tracingOptions"]);
    const { body, status } = yield context.pathUnchecked("deployments/{deploymentName}/audio/translations", deploymentName).post(Object.assign(Object.assign({}, operationOptionsToRequestParameters({
      abortSignal,
      onResponse,
      tracingOptions,
      requestOptions
    })), { contentType: "multipart/form-data", body: Object.assign(Object.assign(Object.assign({}, snakeCaseKeys(rest)), { file: createFile(fileContent, "placeholder.wav") }), response_format ? { response_format } : {}) }));
    if (status !== "200") {
      throw body.error;
    }
    return response_format !== "verbose_json" ? body : camelCaseKeys(body);
  });
}
function _getCompletionsSend(context, deploymentId, body, options = { requestOptions: {} }) {
  return context.path("/deployments/{deploymentId}/completions", deploymentId).post(Object.assign(Object.assign({}, operationOptionsToRequestParameters(options)), { body: {
    prompt: body["prompt"],
    max_tokens: body["maxTokens"],
    temperature: body["temperature"],
    top_p: body["topP"],
    logit_bias: body["logitBias"],
    user: body["user"],
    n: body["n"],
    logprobs: body["logprobs"],
    suffix: body["suffix"],
    echo: body["echo"],
    stop: body["stop"],
    presence_penalty: body["presencePenalty"],
    frequency_penalty: body["frequencyPenalty"],
    best_of: body["bestOf"],
    stream: body["stream"],
    model: body["model"]
  } }));
}
function _getCompletionsDeserialize(result) {
  return __async(this, null, function* () {
    if (isUnexpected(result)) {
      throw result.body.error;
    }
    return getCompletionsResult(result.body);
  });
}
function getCompletionsResult(body) {
  const { created, choices, prompt_filter_results, prompt_annotations } = body, rest = __rest(body, ["created", "choices", "prompt_filter_results", "prompt_annotations"]);
  return Object.assign(Object.assign(Object.assign(Object.assign({}, camelCaseKeys(rest)), { created: new Date(created) }), {
    promptFilterResults: getContentFilterResultsForPrompt({
      prompt_filter_results,
      prompt_annotations
    })
  }), { choices: choices.map((_a3) => {
    var { content_filter_results } = _a3, choice = __rest(_a3, ["content_filter_results"]);
    return Object.assign(Object.assign({}, camelCaseKeys(choice)), !content_filter_results ? {} : {
      contentFilterResults: parseContentFilterResultsForChoiceOutput(content_filter_results)
    });
  }) });
}
function getCompletions(_0, _1, _2) {
  return __async(this, arguments, function* (context, deploymentId, body, options = { requestOptions: {} }) {
    const result = yield _getCompletionsSend(context, deploymentId, body, options);
    return _getCompletionsDeserialize(result);
  });
}
function streamCompletions(context, deploymentName, prompt, options = { requestOptions: {} }) {
  const { abortSignal, onResponse, requestOptions, tracingOptions } = options, rest = __rest(options, ["abortSignal", "onResponse", "requestOptions", "tracingOptions"]);
  const response = _getCompletionsSend(context, deploymentName, Object.assign(Object.assign({ prompt }, rest), { stream: true }), { abortSignal, onResponse, requestOptions, tracingOptions });
  return getOaiSSEs(response, getCompletionsResult);
}
function _getChatCompletionsSend(context, deploymentId, body, options = { requestOptions: {} }) {
  var _a3, _b2, _c2, _d2, _e, _f, _g;
  return context.path("/deployments/{deploymentId}/chat/completions", deploymentId).post(Object.assign(Object.assign({}, operationOptionsToRequestParameters(options)), { body: {
    model: body["model"],
    stream: body["stream"],
    max_tokens: body["maxTokens"],
    temperature: body["temperature"],
    top_p: body["topP"],
    logit_bias: body["logitBias"],
    user: body["user"],
    n: body["n"],
    stop: body["stop"],
    presence_penalty: body["presencePenalty"],
    frequency_penalty: body["frequencyPenalty"],
    data_sources: body["dataSources"] === void 0 ? body["dataSources"] : body["dataSources"].map((p) => serializeAzureChatExtensionConfigurationUnion(p)),
    enhancements: !body.enhancements ? void 0 : {
      grounding: !((_a3 = body.enhancements) === null || _a3 === void 0 ? void 0 : _a3.grounding) ? void 0 : { enabled: (_c2 = (_b2 = body.enhancements) === null || _b2 === void 0 ? void 0 : _b2.grounding) === null || _c2 === void 0 ? void 0 : _c2["enabled"] },
      ocr: !((_d2 = body.enhancements) === null || _d2 === void 0 ? void 0 : _d2.ocr) ? void 0 : { enabled: (_f = (_e = body.enhancements) === null || _e === void 0 ? void 0 : _e.ocr) === null || _f === void 0 ? void 0 : _f["enabled"] }
    },
    seed: body["seed"],
    logprobs: body["logprobs"],
    top_logprobs: body["topLogprobs"],
    response_format: !body.responseFormat ? void 0 : { type: (_g = body.responseFormat) === null || _g === void 0 ? void 0 : _g["type"] },
    tool_choice: body["toolChoice"],
    tools: body["tools"],
    functions: body["functions"] === void 0 ? body["functions"] : body["functions"].map((p) => ({
      name: p["name"],
      description: p["description"],
      parameters: p["parameters"]
    })),
    function_call: body["functionCall"],
    messages: body["messages"].map((p) => serializeChatRequestMessageUnion(p))
  } }));
}
function _getChatCompletionsDeserialize(result) {
  return __async(this, null, function* () {
    if (isUnexpected(result)) {
      throw result.body.error;
    }
    return getChatCompletionsResult(result.body);
  });
}
function getChatCompletionsResult(body) {
  const { created, choices, prompt_filter_results, prompt_annotations, usage } = body, rest = __rest(body, ["created", "choices", "prompt_filter_results", "prompt_annotations", "usage"]);
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, camelCaseKeys(rest)), { created: new Date(created) }), {
    promptFilterResults: getContentFilterResultsForPrompt({
      prompt_filter_results,
      prompt_annotations
    })
  }), !usage ? {} : {
    usage: {
      completionTokens: usage["completion_tokens"],
      promptTokens: usage["prompt_tokens"],
      totalTokens: usage["total_tokens"]
    }
  }), { choices: !choices ? [] : choices.map((_a3) => {
    var { content_filter_results } = _a3, choice = __rest(_a3, ["content_filter_results"]);
    return Object.assign(Object.assign({}, camelCaseKeys(choice)), !content_filter_results ? {} : {
      contentFilterResults: parseContentFilterResultsForChoiceOutput(content_filter_results)
    });
  }) });
}
function getChatCompletions(_0, _1, _2) {
  return __async(this, arguments, function* (context, deploymentName, messages, options = { requestOptions: {} }) {
    const result = yield _getChatCompletionsSendX(context, deploymentName, messages, options);
    return _getChatCompletionsDeserialize(result);
  });
}
function _getChatCompletionsSendX(context, deploymentName, messages, options = { requestOptions: {} }) {
  const { azureExtensionOptions, abortSignal, onResponse, requestOptions, tracingOptions } = options, rest = __rest(options, ["azureExtensionOptions", "abortSignal", "onResponse", "requestOptions", "tracingOptions"]);
  const coreOptions = {
    abortSignal,
    onResponse,
    requestOptions,
    tracingOptions
  };
  const azure = Object.assign(Object.assign({}, !(azureExtensionOptions === null || azureExtensionOptions === void 0 ? void 0 : azureExtensionOptions.extensions) ? {} : { dataSources: azureExtensionOptions.extensions }), !(azureExtensionOptions === null || azureExtensionOptions === void 0 ? void 0 : azureExtensionOptions.enhancements) ? {} : { enhancements: azureExtensionOptions.enhancements });
  return _getChatCompletionsSend(context, deploymentName, Object.assign(Object.assign({ messages }, rest), azure), coreOptions);
}
function streamChatCompletions(context, deploymentName, messages, options = { requestOptions: {} }) {
  const response = _getChatCompletionsSendX(context, deploymentName, messages, Object.assign(Object.assign({}, options), { stream: true }));
  return getOaiSSEs(response, getChatCompletionsResult);
}
function _getImageGenerationsSend(context, deploymentId, body, options = { requestOptions: {} }) {
  return context.path("/deployments/{deploymentId}/images/generations", deploymentId).post(Object.assign(Object.assign({}, operationOptionsToRequestParameters(options)), { body: {
    model: body["model"],
    prompt: body["prompt"],
    n: body["n"],
    size: body["size"],
    response_format: body["responseFormat"],
    quality: body["quality"],
    style: body["style"],
    user: body["user"]
  } }));
}
function _getImageGenerationsDeserialize(result) {
  return __async(this, null, function* () {
    if (isUnexpected(result)) {
      throw result.body.error;
    }
    return {
      created: new Date(result.body["created"]),
      data: result.body["data"].map((p) => {
        var _a3, _b2, _c2, _d2, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25;
        return {
          url: p["url"],
          base64Data: p["b64_json"],
          contentFilterResults: !p.content_filter_results ? void 0 : {
            sexual: !((_a3 = p.content_filter_results) === null || _a3 === void 0 ? void 0 : _a3.sexual) ? void 0 : {
              severity: (_c2 = (_b2 = p.content_filter_results) === null || _b2 === void 0 ? void 0 : _b2.sexual) === null || _c2 === void 0 ? void 0 : _c2["severity"],
              filtered: (_e = (_d2 = p.content_filter_results) === null || _d2 === void 0 ? void 0 : _d2.sexual) === null || _e === void 0 ? void 0 : _e["filtered"]
            },
            violence: !((_f = p.content_filter_results) === null || _f === void 0 ? void 0 : _f.violence) ? void 0 : {
              severity: (_h = (_g = p.content_filter_results) === null || _g === void 0 ? void 0 : _g.violence) === null || _h === void 0 ? void 0 : _h["severity"],
              filtered: (_k = (_j = p.content_filter_results) === null || _j === void 0 ? void 0 : _j.violence) === null || _k === void 0 ? void 0 : _k["filtered"]
            },
            hate: !((_l = p.content_filter_results) === null || _l === void 0 ? void 0 : _l.hate) ? void 0 : {
              severity: (_o = (_m = p.content_filter_results) === null || _m === void 0 ? void 0 : _m.hate) === null || _o === void 0 ? void 0 : _o["severity"],
              filtered: (_q = (_p = p.content_filter_results) === null || _p === void 0 ? void 0 : _p.hate) === null || _q === void 0 ? void 0 : _q["filtered"]
            },
            selfHarm: !((_r = p.content_filter_results) === null || _r === void 0 ? void 0 : _r.self_harm) ? void 0 : {
              severity: (_t = (_s = p.content_filter_results) === null || _s === void 0 ? void 0 : _s.self_harm) === null || _t === void 0 ? void 0 : _t["severity"],
              filtered: (_v = (_u = p.content_filter_results) === null || _u === void 0 ? void 0 : _u.self_harm) === null || _v === void 0 ? void 0 : _v["filtered"]
            }
          },
          revisedPrompt: p["revised_prompt"],
          promptFilterResults: !p.prompt_filter_results ? void 0 : {
            sexual: !((_w = p.prompt_filter_results) === null || _w === void 0 ? void 0 : _w.sexual) ? void 0 : {
              severity: (_y = (_x = p.prompt_filter_results) === null || _x === void 0 ? void 0 : _x.sexual) === null || _y === void 0 ? void 0 : _y["severity"],
              filtered: (_0 = (_z = p.prompt_filter_results) === null || _z === void 0 ? void 0 : _z.sexual) === null || _0 === void 0 ? void 0 : _0["filtered"]
            },
            violence: !((_1 = p.prompt_filter_results) === null || _1 === void 0 ? void 0 : _1.violence) ? void 0 : {
              severity: (_3 = (_2 = p.prompt_filter_results) === null || _2 === void 0 ? void 0 : _2.violence) === null || _3 === void 0 ? void 0 : _3["severity"],
              filtered: (_5 = (_4 = p.prompt_filter_results) === null || _4 === void 0 ? void 0 : _4.violence) === null || _5 === void 0 ? void 0 : _5["filtered"]
            },
            hate: !((_6 = p.prompt_filter_results) === null || _6 === void 0 ? void 0 : _6.hate) ? void 0 : {
              severity: (_8 = (_7 = p.prompt_filter_results) === null || _7 === void 0 ? void 0 : _7.hate) === null || _8 === void 0 ? void 0 : _8["severity"],
              filtered: (_10 = (_9 = p.prompt_filter_results) === null || _9 === void 0 ? void 0 : _9.hate) === null || _10 === void 0 ? void 0 : _10["filtered"]
            },
            selfHarm: !((_11 = p.prompt_filter_results) === null || _11 === void 0 ? void 0 : _11.self_harm) ? void 0 : {
              severity: (_13 = (_12 = p.prompt_filter_results) === null || _12 === void 0 ? void 0 : _12.self_harm) === null || _13 === void 0 ? void 0 : _13["severity"],
              filtered: (_15 = (_14 = p.prompt_filter_results) === null || _14 === void 0 ? void 0 : _14.self_harm) === null || _15 === void 0 ? void 0 : _15["filtered"]
            },
            profanity: !((_16 = p.prompt_filter_results) === null || _16 === void 0 ? void 0 : _16.profanity) ? void 0 : {
              filtered: (_18 = (_17 = p.prompt_filter_results) === null || _17 === void 0 ? void 0 : _17.profanity) === null || _18 === void 0 ? void 0 : _18["filtered"],
              detected: (_20 = (_19 = p.prompt_filter_results) === null || _19 === void 0 ? void 0 : _19.profanity) === null || _20 === void 0 ? void 0 : _20["detected"]
            },
            jailbreak: !((_21 = p.prompt_filter_results) === null || _21 === void 0 ? void 0 : _21.jailbreak) ? void 0 : {
              filtered: (_23 = (_22 = p.prompt_filter_results) === null || _22 === void 0 ? void 0 : _22.jailbreak) === null || _23 === void 0 ? void 0 : _23["filtered"],
              detected: (_25 = (_24 = p.prompt_filter_results) === null || _24 === void 0 ? void 0 : _24.jailbreak) === null || _25 === void 0 ? void 0 : _25["detected"]
            }
          }
        };
      })
    };
  });
}
function getImageGenerations(_0, _1, _2) {
  return __async(this, arguments, function* (context, deploymentId, body, options = { requestOptions: {} }) {
    const result = yield _getImageGenerationsSend(context, deploymentId, body, options);
    return _getImageGenerationsDeserialize(result);
  });
}
function _getEmbeddingsSend(context, deploymentId, body, options = { requestOptions: {} }) {
  return context.path("/deployments/{deploymentId}/embeddings", deploymentId).post(Object.assign(Object.assign({}, operationOptionsToRequestParameters(options)), { body: {
    user: body["user"],
    model: body["model"],
    input: body["input"],
    dimensions: body["dimensions"]
  } }));
}
function _getEmbeddingsDeserialize(result) {
  return __async(this, null, function* () {
    if (isUnexpected(result)) {
      throw result.body.error;
    }
    return {
      data: result.body["data"].map((p) => ({
        embedding: p["embedding"],
        index: p["index"]
      })),
      usage: {
        promptTokens: result.body.usage["prompt_tokens"],
        totalTokens: result.body.usage["total_tokens"]
      }
    };
  });
}
function getEmbeddings(_0, _1, _2) {
  return __async(this, arguments, function* (context, deploymentId, body, options = { requestOptions: {} }) {
    const result = yield _getEmbeddingsSend(context, deploymentId, body, options);
    return _getEmbeddingsDeserialize(result);
  });
}
function getContentFilterResultsForPrompt({ prompt_annotations, prompt_filter_results }) {
  const res = prompt_filter_results !== null && prompt_filter_results !== void 0 ? prompt_filter_results : prompt_annotations;
  return res === null || res === void 0 ? void 0 : res.map((_a3) => {
    var { content_filter_results } = _a3, rest = __rest(_a3, ["content_filter_results"]);
    return Object.assign(Object.assign({}, camelCaseKeys(rest)), { contentFilterResults: parseContentFilterResultDetailsForPromptOutput(content_filter_results) });
  });
}
function parseContentFilterResultDetailsForPromptOutput(_a3 = {}) {
  var { error } = _a3, rest = __rest(_a3, ["error"]);
  return error ? parseError(error) : camelCaseKeys(rest);
}
function parseError(error) {
  var _a3;
  return {
    error: Object.assign(Object.assign({}, error), { details: (_a3 = error["details"]) !== null && _a3 !== void 0 ? _a3 : [] })
  };
}
function parseContentFilterResultsForChoiceOutput(_a3 = {}) {
  var _b2;
  var { error } = _a3, successResult = __rest(_a3, ["error"]);
  return error ? {
    error: Object.assign(Object.assign({}, error), { details: (_b2 = error["details"]) !== null && _b2 !== void 0 ? _b2 : [] })
  } : camelCaseKeys(successResult);
}

// node_modules/@azure/openai/dist-esm/src/api/policies/nonAzure.js
function nonAzurePolicy() {
  const policy = {
    name: "openAiEndpoint",
    sendRequest: (request, next) => {
      const obj = new URL(request.url);
      const parts = obj.pathname.split("/");
      switch (parts[parts.length - 1]) {
        case "completions":
          if (parts[parts.length - 2] === "chat") {
            obj.pathname = `${parts[1]}/chat/completions`;
          } else {
            obj.pathname = `${parts[1]}/completions`;
          }
          break;
        case "embeddings":
          obj.pathname = `${parts[1]}/embeddings`;
          break;
        case "generations":
          if (parts[parts.length - 2] === "images") {
            obj.pathname = `${parts[1]}/images/generations`;
          } else {
            throw new Error("Unexpected path");
          }
          break;
        case "transcriptions":
          obj.pathname = `${parts[1]}/audio/transcriptions`;
          break;
        case "translations":
          obj.pathname = `${parts[1]}/audio/translations`;
          break;
      }
      obj.searchParams.delete("api-version");
      request.url = obj.toString();
      return next(request);
    }
  };
  return policy;
}

// node_modules/@azure/openai/dist-esm/src/OpenAIClient.js
function createOpenAIEndpoint(version) {
  return `https://api.openai.com/v${version}`;
}
function isCred(cred) {
  return isTokenCredential(cred) || cred.key !== void 0;
}
var OpenAIClient = class {
  constructor(endpointOrOpenAiKey, credOrOptions = {}, options = {}) {
    var _a3, _b2;
    this._isAzure = false;
    let opts;
    let endpoint;
    let cred;
    if (isCred(credOrOptions)) {
      endpoint = endpointOrOpenAiKey;
      cred = credOrOptions;
      opts = options;
      this._isAzure = true;
    } else {
      endpoint = createOpenAIEndpoint(1);
      cred = endpointOrOpenAiKey;
      const { credentials } = credOrOptions, restOpts = __rest(credOrOptions, ["credentials"]);
      opts = Object.assign({ credentials: {
        apiKeyHeaderName: (_a3 = credentials === null || credentials === void 0 ? void 0 : credentials.apiKeyHeaderName) !== null && _a3 !== void 0 ? _a3 : "Authorization",
        scopes: credentials === null || credentials === void 0 ? void 0 : credentials.scopes
      } }, restOpts);
    }
    this._client = createOpenAI(endpoint, cred, Object.assign(Object.assign({}, opts), this._isAzure ? {} : {
      additionalPolicies: [
        ...(_b2 = opts.additionalPolicies) !== null && _b2 !== void 0 ? _b2 : [],
        {
          position: "perCall",
          policy: nonAzurePolicy()
        }
      ]
    }));
  }
  setModel(model, options) {
    if (!this._isAzure) {
      options.model = model;
    }
  }
  // implementation
  getAudioTranslation(deploymentName, fileContent, formatOrOptions, inputOptions) {
    return __async(this, null, function* () {
      const options = inputOptions !== null && inputOptions !== void 0 ? inputOptions : typeof formatOrOptions === "string" ? {} : formatOrOptions !== null && formatOrOptions !== void 0 ? formatOrOptions : {};
      const response_format = typeof formatOrOptions === "string" ? formatOrOptions : void 0;
      this.setModel(deploymentName, options);
      if (response_format === void 0) {
        return getAudioTranslation(this._client, deploymentName, fileContent, options);
      }
      return getAudioTranslation(this._client, deploymentName, fileContent, response_format, options);
    });
  }
  // implementation
  getAudioTranscription(deploymentName, fileContent, formatOrOptions, inputOptions) {
    return __async(this, null, function* () {
      const options = inputOptions !== null && inputOptions !== void 0 ? inputOptions : typeof formatOrOptions === "string" ? {} : formatOrOptions !== null && formatOrOptions !== void 0 ? formatOrOptions : {};
      const response_format = typeof formatOrOptions === "string" ? formatOrOptions : void 0;
      this.setModel(deploymentName, options);
      if (response_format === void 0) {
        return getAudioTranscription(this._client, deploymentName, fileContent, options);
      }
      return getAudioTranscription(this._client, deploymentName, fileContent, response_format, options);
    });
  }
  /**
   * Gets completions for the provided input prompts.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data.
   */
  getCompletions(deploymentName, prompt, options = { requestOptions: {} }) {
    this.setModel(deploymentName, options);
    const { abortSignal, onResponse, requestOptions, tracingOptions } = options, rest = __rest(options, ["abortSignal", "onResponse", "requestOptions", "tracingOptions"]);
    return getCompletions(this._client, deploymentName, Object.assign({ prompt }, rest), { abortSignal, onResponse, requestOptions, tracingOptions });
  }
  /**
   * Lists the completions tokens as they become available for a given prompt.
   * @param deploymentName - The name of the model deployment (when using Azure OpenAI) or model name (when using non-Azure OpenAI) to use for this request.
   * @param prompt - The prompt to use for this request.
   * @param options - The completions options for this completions request.
   * @returns An asynchronous iterable of completions tokens.
   */
  streamCompletions(deploymentName, prompt, options = {}) {
    this.setModel(deploymentName, options);
    return streamCompletions(this._client, deploymentName, prompt, options);
  }
  /**
   * Gets chat completions for the provided chat messages.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data.
   */
  getChatCompletions(deploymentName, messages, options = { requestOptions: {} }) {
    this.setModel(deploymentName, options);
    return getChatCompletions(this._client, deploymentName, messages, options);
  }
  /**
   * Lists the chat completions tokens as they become available for a chat context.
   * @param deploymentName - The name of the model deployment (when using Azure OpenAI) or model name (when using non-Azure OpenAI) to use for this request.
   * @param messages - The chat context messages to use for this request.
   * @param options - The chat completions options for this chat completions request.
   * @returns An asynchronous iterable of chat completions tokens.
   */
  streamChatCompletions(deploymentName, messages, options = { requestOptions: {} }) {
    this.setModel(deploymentName, options);
    return streamChatCompletions(this._client, deploymentName, messages, options);
  }
  /** Creates an image given a prompt. */
  getImages(deploymentName, prompt, options = { requestOptions: {} }) {
    this.setModel(deploymentName, options);
    const { abortSignal, onResponse, requestOptions, tracingOptions } = options, rest = __rest(options, ["abortSignal", "onResponse", "requestOptions", "tracingOptions"]);
    return getImageGenerations(this._client, deploymentName, Object.assign({ prompt }, rest), { abortSignal, onResponse, requestOptions, tracingOptions });
  }
  /** Return the embeddings for a given prompt. */
  getEmbeddings(deploymentName, input, options = { requestOptions: {} }) {
    this.setModel(deploymentName, options);
    const { abortSignal, onResponse, requestOptions, tracingOptions } = options, rest = __rest(options, ["abortSignal", "onResponse", "requestOptions", "tracingOptions"]);
    return getEmbeddings(this._client, deploymentName, Object.assign({ input }, rest), { abortSignal, onResponse, requestOptions, tracingOptions });
  }
};

// node_modules/@azure/openai/dist-esm/src/OpenAIKeyCredential.js
var OpenAIKeyCredential = class {
  /**
   * Create an instance of an AzureKeyCredential for use
   * with a service client.
   *
   * @param key - The initial value of the key to use in authentication
   */
  constructor(key) {
    if (!key) {
      throw new Error("key must be a non-empty string");
    }
    this._key = createKey(key);
  }
  /**
   * The value of the key to be used in authentication
   */
  get key() {
    return this._key;
  }
  /**
   * Change the value of the key.
   *
   * Updates will take effect upon the next request after
   * updating the key value.
   *
   * @param newKey - The new key value to be used
   */
  update(newKey) {
    this._key = createKey(newKey);
  }
};
function createKey(key) {
  return key.startsWith("Bearer ") ? key : `Bearer ${key}`;
}
export {
  AzureKeyCredential,
  OpenAIClient,
  OpenAIKeyCredential
};
//# sourceMappingURL=@azure_openai.js.map
