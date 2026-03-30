import { mockTests } from "@/lib/data/mock-test-data";
import MockTestPageClient from "./MockTestPageClient";

export function generateStaticParams() {
    return mockTests.map(t => ({ testId: t.id }));
}

export default function MockTestDetailPage() {
    return <MockTestPageClient />;
}
