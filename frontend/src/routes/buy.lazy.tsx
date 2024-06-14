import { createLazyFileRoute } from "@tanstack/react-router";
import Buy from "../components/Buy";

export const Route = createLazyFileRoute("/buy")({
  component: () => <Buy />,
});
