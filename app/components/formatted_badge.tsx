'use client';

import { ErrorBadge } from "./error_badge";
import { WarningBadge } from "./warning_bade";

export function FormatErrorOrWarningMessage({ level, message }: { level: string, message: string }) {
    if (level === 'error') {
        <ErrorBadge children="Error" />
    } else if (level === 'warning') {
        <WarningBadge children="Warning" />
    }
}