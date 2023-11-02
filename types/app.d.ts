declare global {
	declare type AppDispatch = import('../src-new/app/store').AppDispatch;
	declare type RootState = import('../src-new/app/store').RootState;
}

export {};
