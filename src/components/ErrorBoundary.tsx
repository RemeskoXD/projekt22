import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  fallbackDescription?: string;
  showHomeLink?: boolean;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[320px] p-6 sm:p-10 flex flex-col items-center justify-center text-center bg-slate-900/60 rounded-3xl border border-slate-800 text-white my-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            {this.props.fallbackTitle || 'Nepodařilo se načíst tuto komponentu'}
          </h3>
          <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
            {this.props.fallbackDescription ||
              'Došlo k neočekávané chybě při vykreslování externího widgetu. Můžete to zkusit znovu nebo pokračovat v prohlížení webu.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={this.handleReset}
              className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-xl bg-brand-600 hover:bg-brand-700 text-white transition-colors shadow-sm"
            >
              <RefreshCw className="w-4 h-4 mr-2" /> Zkusit znovu
            </button>
            {this.props.showHomeLink && (
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                <Home className="w-4 h-4 mr-2" /> Zpět na úvod
              </Link>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
