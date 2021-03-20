# [BACK](https://github.com/bonnysid/lessons-branches/tree/main)
# Spring core

## Annotations:
- **@Configuration** - show to spring: this class is config
```java
@Configuration
public class SpringConfig {}
```
- **@Bean** - create bean
```java
@Configuration
@ComponentScan("org.bloom")
@PropertySource("classpath:musicPlayer.properties")
public class SpringConfig {

    @Bean
    public List<MusicGenres> musicalGenres() {
        return new ArrayList<>(Arrays.asList(MusicGenres.CLASSIC, MusicGenres.HIP_HOP, MusicGenres.ROCK));
    }
}
```
- **@Component** - show to spring: this class is component
```java
@Component
public class Computer {}
```
- **@ComponentScan(<_path of package_>)** - search all **@Components** in selected path
```java
@Configuration
@ComponentScan("org.bloom")
public class SpringConfig {
}
```
- **@PropertySource("classpath:<_path of props_>")** - import props to **@Value**
```java
@Configuration
@PropertySource("classpath:musicPlayer.properties")
public class SpringConfig {}
```
- **@Qualifier(<_name of class_>)** - insert in prop selected class instance
```java
    @Autowired
    public MusicPlayer(@Qualifier("classicMusic") Music classicMusic,
                       @Qualifier("rockMusic") Music rockMusic,
                       @Qualifier("hipHopMusic") Music hipHopMusic,
                       List<MusicGenres> defaultGenres) {
        this.classicMusic = classicMusic;
        this.rockMusic = rockMusic;
        this.hipHopMusic = hipHopMusic;
        this.defaultGenres = defaultGenres;
        this.musics = new ArrayList<>(Arrays.asList(classicMusic, rockMusic, hipHopMusic));
    }
```
- **@Value(${<_value from props_>})** - set value from props
```java
    @Value("${musicPlayer.name}")
    private String name;
    @Value("${musicPlayer.volume}")
    private int volume;
```
- **@Autowired** - show to spring where he need insert props to field/method/constructor
```java
public class Computer {
    @Autowired
    private MusicPlayer musicPlayer;
}
```
```java
public class Computer {
    @Autowired
    public Computer(MusicPlayer musicPlayer) {
        id = Computer.lastId++;
        this.musicPlayer = musicPlayer;
    }
}
```
```java
    @Autowired
    public void setName(String name) {
            this.name = name;
    }
```
- **@Scope("prototype/singleton")** - add object to map or not
- **@PostConstruct** - call this method after create the instance
```java
    @PostConstruct
    public void doInit() {
        System.out.println("Music Player creating...");
    }
```

- **@PreDestroy** - call this method before destroy the instance
```java
    @PreDestroy
    public void doDestroy() {
        System.out.println("Music Player destroying...");
    }
```

## XML Tags:
- **bean** _(props: id, name, class, scope, init-method, destroy-method, factory-bean, factory-method, autowired, primary)_
Props:
    - _id / name_ - name of bean
    - _class_ - init java class to bean
    - _scope ("singleton"/"prototype")_ - set singleton bean or prototype
    - _init-method_ - method of class whose will be invoke after the creation bean
    - _destroy-method_ - method of class whose will be invoke before the destroying bean
    - _factory-bean_ - bean whose has a factory method
    - _factory-method_ - method whose create a instance of class
    - _autowired ("byName"/"byType"/"default"/"no")_ - search bean for ref to this class
    - _primary("true"/"false")_ - primary bean for autowired
```java
<bean  id="musicPlayer" 
         class="org.bloom.MusicPlayer" 
         scope="prototype" 
         init-method="doInit" 
  >
```
- **property** - setMusic --> name="music"
```java
<property name="musics" >
   <list>
       <ref bean="musicBean"/>
        <ref bean="musicBean2"/>
        <ref bean="musicBean3"/>
    </list>
</property>
```

```java
<property name="name" value="${musicPlayer.name}"/>
```
- **list**
```java
<list>
   <ref bean="musicBean"/>
    <ref bean="musicBean2"/>
    <ref bean="musicBean3"/>
</list>
```
- **constructor-arg**
```java
<constructor-arg ref/value="musicBean"/>
```
- **context:component-scan** - seatch components in package
```java
    <context:component-scan base-package="org.bloom"/>
```
- **context:property-placeholder**

```java
    <context:property-placeholder location="classpath:musicPlayer.properties"/>
```

# Spring MVC

## Annotations:
- **@EnableWebMvc** - enable web mvc (before config)
```java
@Configuration
@ComponentScan("org.bonnysid.bloom")
@EnableWebMvc
public class SpringConfig implements WebMvcConfigurer {}
```
- **@Controller** - show to spring: this class is controller
```java
@Controller
public class UsersController {
    private final UserDAO userDAO;
}
```
- **@GetMapping / @PostMapping / @PatchMapping / @DeleteMapping** _(props: "/url" or "/urlParams/{id}");
```java
@Controller
@RequestMapping("/users")
public class UsersController {
    private final UserDAO userDAO;

    @Autowired
    public UsersController(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @GetMapping()
    public String get(Model model) {
        model.addAttribute("users", userDAO.get());
        return "users/users";
    }

    @GetMapping("/{id}")
    public String get(@PathVariable("id") int id, Model model) {
        model.addAttribute("user", userDAO.get(id));
        return "users/user";
    }

    @GetMapping("/new")
    public String getFormForCreate(@ModelAttribute("user") User user) {
        return "users/new";
    }

    @PostMapping()
    public String create(@ModelAttribute("user") @Valid User user, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) return "users/new";
        userDAO.insert(user);
        return "redirect:/users";
    }

    @GetMapping("/{id}/update")
    public String getFormForCreateUpdate(@PathVariable("id") int id, Model model) {
        model.addAttribute("user", userDAO.get(id));
        return "users/update";
    }

    @PatchMapping("/{id}")
    public String update(@ModelAttribute("user") @Valid User user, BindingResult bindingResult, @PathVariable("id") int id) {
        if(bindingResult.hasErrors()) return "users/update";
        userDAO.update(id, user);
        return "redirect:/users";
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") int id) {
        userDAO.delete(id);
        return "redirect:/users";
    }

}
```
- **@RequestMapping** _(props: "baseUrl", before Controller)_ - set base url for mapping request
```java
@Controller
@RequestMapping("/users")
public class UsersController {
    private final UserDAO userDAO;
}
```
- **@PathVariable** _(props: "param")_ - get param in url
```java
    @GetMapping("/{id}/update")
    public String getFormForCreateUpdate(@PathVariable("id") int id, Model model) {
        model.addAttribute("user", userDAO.get(id));
        return "users/update";
    }
```
- **@Valid** - show param with validation
```java
    @PostMapping()
    public String create(@ModelAttribute("user") @Valid User user, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) return "users/new";
        userDAO.insert(user);
        return "redirect:/users";
    }
```
- **@ModelAttribute** _(props: "paramName")_ - can get object from model
```java
    @PatchMapping("/{id}")
    public String update(@ModelAttribute("user") @Valid User user, BindingResult bindingResult, @PathVariable("id") int id) {
        if(bindingResult.hasErrors()) return "users/update";
        userDAO.update(id, user);
        return "redirect:/users";
    }
```
- **@NotEmpty** _(props: message)_ - _validator_ for fields
```java
    @NotEmpty(message = "Login is required")
    private String login;
```
- **@Size** _(props: min, max, message)_ - _validator_ for fields
```java
    @NotEmpty(message = "Login is required")
    @Size(min = 2, max = 30, message = "Login length should be between 2-30")
    private String login;
```
- **@Email** _(props: message)_ - _validator_ for emails
```java
    @NotEmpty(message = "Email is required")
    @Email(message = "Email should be incorrect")
    private String email;
```
- **@Min** _(props: min, message)_ - _validator_ for fields
```java
    @Min(value = 0, message = "Age cannot be less than 0")
    private int age;
```

## Objects / Interfaces / Classes:
- **WebMvcConfigurer** (_interface_) - for config
- **Model** - for communicate with page
```java
    @GetMapping()
    public String get(Model model) {
        model.addAttribute("users", userDAO.get());
        return "users/users";
    }

    @GetMapping("/{id}")
    public String get(@PathVariable("id") int id, Model model) {
        model.addAttribute("user", userDAO.get(id));
        return "users/user";
    }
```
- **BindingResult** (_object_) - after prop with **@Valid**
```java
    @PostMapping()
    public String create(@ModelAttribute("user") @Valid User user, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) return "users/new";
        userDAO.insert(user);
        return "redirect:/users";
    }
```
- **RowMapper<T>** - for obj mappers
```java
public class UserMapper implements RowMapper<User> {
    @Override
    public User mapRow(ResultSet resultSet, int i) throws SQLException {
        User u = new User();
        u.setId(resultSet.getInt("id"));
        u.setLogin(resultSet.getString("login"));
        u.setEmail(resultSet.getString("email"));
        u.setAge(resultSet.getInt("age"));
        return u;
    }
}
```
- **DataSource** - using for **JDBC Template**
```java
    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();

        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUrl(DataConfig.URL.value());
        dataSource.setUsername(DataConfig.USERNAME.value());
        dataSource.setPassword(DataConfig.PASSWORD.value());

        return dataSource;
    }

    @Bean
    public JdbcTemplate jdbcTemplate(DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }
```
- **JdbcTemplate** - for query to DB
```java
@Component
public class UserDAO {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<User> get() {
        return jdbcTemplate.query("SELECT * FROM Users", new BeanPropertyRowMapper<>(User.class));
    }

    public User get(int id) {
        return jdbcTemplate.query("SELECT * FROM Users WHERE id=?", new Object[]{id}, new BeanPropertyRowMapper<>(User.class))
                .stream()
                .findAny()
                .orElse(null);
    }

    public void insert(User user) {
        jdbcTemplate.update("INSERT INTO Users (login, email, password, age) VALUES (?, ?, ?, ?)", user.getLogin(), user.getEmail(), user.getPassword(), user.getAge());
    }

    public void delete(int id) {
        jdbcTemplate.update("DELETE FROM Users WHERE id=?", id);

    }

    public void update(int id, User user) {
        jdbcTemplate.update("UPDATE Users SET login=?, email=?, password=?, age=?  WHERE id=?", user.getLogin(), user.getEmail(), user.getPassword(), user.getAge(), id);
    }
}
```




