package com.booking.service.impl;
import com.booking.entity.Producto;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.repository.IProductoRepository;
import com.booking.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service("ProductoServiceImpl")
public class ProductoServiceImpl implements IProductoService {

    @Autowired
    private IProductoRepository productoRepository;


    @Override
    public Producto insert(Producto producto) throws InvalidDataException, NotExistDataException {
        if(producto.getDescripcion() == null || producto.getNombre() ==null || producto.getNombre().trim() == "" || producto.getDescripcion().trim() == "")
            throw  new NotExistDataException("el campo del nombre o el campo de la descripcion se encuentra vacio");
        else if(producto.getDescripcion().trim().length()>250 || producto.getNombre().trim().length()>50)
            throw new InvalidDataException("no es valida la cantidad de caracteres que tiene la descripcion (no puede ser mayor a 250 caracteres)\n o el nombre (no puede ser mayor a 50 caracteres) ");

        producto.setDescripcion(producto.getDescripcion().trim());
              producto.setNombre(producto.getNombre().trim());
             return productoRepository.save(new Producto(producto.getNombre(),producto.getDescripcion()));
    }

    @Override
    public List<Producto> readAll(){

        List<Producto> productos = productoRepository.findAll();

        return productos;
    }

    @Override
    public Optional<Producto> readOne(Long id) throws ResourcesNotFoundException{
        Optional<Producto> respuesta = productoRepository.findById(id);
        if(!respuesta.isPresent())
            throw new ResourcesNotFoundException("el producto con Id "+ id+ " no existe");

        return respuesta;
    }

    @Override
    public List<Producto> getProductsByCategory(String titulo) throws ResourcesNotFoundException {
        List<Producto> productosPorCategoria = productoRepository.getProductsByCategory(titulo);
        if (productosPorCategoria == null) {
            throw new ResourcesNotFoundException("el producto de categoria " + titulo + " no existe");
        }
        return productosPorCategoria;
    }

    @Override
    public List<Producto> getProductsByCity(String nombre) throws ResourcesNotFoundException{

        List<Producto> productosPorCiudad =  productoRepository.getProductsByCity(nombre);
        if (productosPorCiudad  == null){
            throw new ResourcesNotFoundException("el producto de la ciudad" + nombre + " no existe");
        }
        return productosPorCiudad;
    }
}

