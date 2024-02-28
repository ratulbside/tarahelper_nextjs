export function ErrorBadge({ children }: { children: string }): JSX.Element {
    return(
    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
        {children}
    </span>);
}
