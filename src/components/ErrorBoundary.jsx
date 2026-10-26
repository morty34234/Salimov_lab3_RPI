import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary поймал ошибку:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Что-то пошло не так</h2>
          <p>Не удалось загрузить список лекторов. Пожалуйста, попробуйте еще раз.</p>
          <button className="action-btn primary" onClick={this.handleRetry}>
            Попробовать снова
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;