function PrivateRoutes({ children, currentUser, setCurrentPage }) {
  useEffect(() => {
    if (!currentUser) {
      setCurrentPage('signin');
    }
  }, [currentUser, setCurrentPage]);

  return currentUser ? children : null;
}