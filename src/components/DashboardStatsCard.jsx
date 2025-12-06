import { Card, CardContent } from "@/components/ui/card";

export default function DashboardStatsCard({ icon: Icon, title, value, color }) {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition">
      <CardContent className="p-5 text-center">
        <Icon className={`w-8 h-8 mx-auto mb-3 ${color}`} />
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{value}</h2>
      </CardContent>
    </Card>
  );
}
