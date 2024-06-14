import { createLazyFileRoute } from "@tanstack/react-router";
import Overview from "../components/Overview";

export const Route = createLazyFileRoute("/")({
  component: () => <Overview />,
});
