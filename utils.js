import fs from "fs";
import path from "path";

export function logBugReport(error, testName, requestData, responseData) {
    const folderPath = path.join("bugs");

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fileName = `${testName.replace(/\s+/g, "_")}_${timestamp}.md`;
    const filePath = path.join(folderPath, fileName);

    const markdown = `
# 🐞 Bug Report

**Test Name:** \`${testName}\`  
**Timestamp:** ${new Date().toISOString()}  

---

## ❌ Error
\`\`\`txt
${error.message || error}
\`\`\`

---

## 📤 Request
\`\`\`json
${JSON.stringify(requestData, null, 2)}
\`\`\`

---

## 📥 Response
\`\`\`json
${JSON.stringify(responseData, null, 2)}
\`\`\`
`;

    fs.writeFileSync(filePath, markdown);
}
