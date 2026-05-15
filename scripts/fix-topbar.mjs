import fs from "fs";

const path = "components/Topbar.jsx";
let content = fs.readFileSync(path, "utf8");

content = content.replace(
  `        <div className="col-md-6 text-center text-lg-end">
          <div className="me-3 pe-3 border-end py-2">`,
  `        <motionless>
          <motionless>
            <motionless>`
);

content = content.replace(
  `          </div>
        </div>
      </div>
    </div>
  );
}`,
  `          </div>
          </div>
        </div>
      </div>
    </div>
  );
}`
);

content = content.replaceAll("motionless", "div");

fs.writeFileSync(path, content);
