import httpServer from './config/http';

const PORT = process.env.PORT || 3000;

const bootstrap = async () => {
	httpServer.listen(PORT, () =>
		console.log(`Server listening at port ${PORT}`)
	);
};

bootstrap();
