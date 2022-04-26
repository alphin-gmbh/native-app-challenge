/**
 * Adapter used to serialize an object
 */
export interface ClientViewDataAdapter<T> {
  clientAdapt(object: any): T;
}

/**
 * Adapter used to deserialize an object
 */
export interface ServerStorageDataAdapter<T> {
  serverAdapt(object: any): T;
}

/**
 * Adapter used for serialization and deserialization
 */
export interface Adapter<T>
  extends ClientViewDataAdapter<T>,
    ServerStorageDataAdapter<T> {}
