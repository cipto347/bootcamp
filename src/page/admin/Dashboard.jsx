import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import CardDashboard from "../../components/atom/card/Dashboard";
import DocChart from "../documentation/DocChart";

function Dashboard() {
  const { t } = useTranslation("dashboard");
  const analytics = {
    unit_apartemen: "2",
    penyewa: "4",
    karyawan: "1",
    keluhan: "1",
  };
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.keys(analytics).map((keyName) => (
          <CardDashboard
            title={analytics[keyName]}
            info={t(`title.${keyName}`)}
          />
        ))}
      </div>
      <div className="mb-10 mt-20">
        <DocChart />
      </div>
    </div>
  );
}

export default Dashboard;
