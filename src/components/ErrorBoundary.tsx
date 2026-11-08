import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 font-mono">
          <div className="max-w-lg w-full border border-owl-border rounded bg-owl-surface p-6">
            <p className="text-owl-comment text-sm mb-2">
              {"// runtime exception"}
            </p>
            <h1 className="text-2xl font-bold text-owl-error mb-4">
              Something broke.
            </h1>
            <p className="text-sm text-owl-text-muted mb-4">
              A runtime error was caught. The rest of the application is still
              usable.
            </p>
            {this.state.error && (
              <pre className="text-xs text-owl-text-muted bg-owl-bg p-3 rounded border border-owl-border overflow-auto mb-4 max-h-40">
                {this.state.error.message}
              </pre>
            )}
            <button
              type="button"
              onClick={this.handleReload}
              className="px-4 py-2 bg-owl-surface hover:bg-owl-surface-hover border border-owl-border text-owl-text font-mono text-sm rounded transition-colors cursor-pointer"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
